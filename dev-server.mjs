import { createReadStream, existsSync, statSync, watch } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = process.cwd();
const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 5173);
const reloadFiles = new Set(["index.html", "portfolio-data.js", "app.js", "styles.css"]);
const clients = new Set();

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

const liveReloadScript = `
<script>
  new EventSource("/__live-reload").addEventListener("reload", () => location.reload());
</script>`;

const server = createServer((req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

  if (url.pathname === "/__live-reload") {
    res.writeHead(200, {
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
      "Content-Type": "text/event-stream",
    });
    res.write("\\n");
    clients.add(res);
    req.on("close", () => clients.delete(res));
    return;
  }

  const filePath = resolveFile(url.pathname);

  if (!filePath) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  if (filePath.endsWith("index.html")) {
    let html = "";
    const stream = createReadStream(filePath, "utf8");

    stream.on("data", (chunk) => {
      html += chunk;
    });
    stream.on("end", () => {
      res.writeHead(200, {
        "Cache-Control": "no-store",
        "Content-Type": types[".html"],
      });
      res.end(html.replace("</body>", `${liveReloadScript}\n  </body>`));
    });
    stream.on("error", () => sendError(res));
    return;
  }

  res.writeHead(200, {
    "Cache-Control": "no-store",
    "Content-Type": types[extname(filePath)] || "application/octet-stream",
  });
  createReadStream(filePath)
    .on("error", () => sendError(res))
    .pipe(res);
});

server.listen(port, host, () => {
  console.log(`Editable portfolio running at http://localhost:${port}`);
  console.log("Edit portfolio-data.js and refreshes will happen automatically.");
});

for (const file of reloadFiles) {
  watch(join(root, file), { persistent: false }, () => {
    for (const client of clients) {
      client.write("event: reload\\ndata: changed\\n\\n");
    }
  });
}

function resolveFile(pathname) {
  const requestPath = pathname === "/" ? "/index.html" : decodeURIComponent(pathname);
  const candidate = normalize(resolve(root, `.${requestPath}`));

  if (!candidate.startsWith(root)) return null;
  if (!existsSync(candidate)) return null;

  const stats = statSync(candidate);
  if (stats.isDirectory()) {
    const indexPath = join(candidate, "index.html");
    return existsSync(indexPath) ? indexPath : null;
  }

  return stats.isFile() ? candidate : null;
}

function sendError(res) {
  if (!res.headersSent) {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
  }
  res.end("Server error");
}
