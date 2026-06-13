# Theo Website

This is a small static portfolio site. There is no build step.

## Local Preview

Run the editable local site with live reload:

```txt
npm run dev
```

Then open:

```txt
http://localhost:5173
```

The local server watches `portfolio-data.js`, `app.js`, `styles.css`, and `index.html`, then reloads the browser when one of them changes.

If you use `netlify dev`, the `[dev]` config also points to this editable root page. Production deploys are still configured separately below.

Netlify deploys the preserved Framer export from:

```txt
agreeable-reservation-488504.framer.app_tostatic/
```

That publish directory is pinned in `netlify.toml` so Netlify deploys the same Framer version instead of the simplified editable root page.

## Edit Content

Edit `portfolio-data.js`.

Profile/sidebar information lives in:

```js
profile: {
  name: "Theo Henry",
  headline: "...",
  skills: ["Python", "React"],
}
```

Page sections live in the `sections` array:

```js
sections: [
  {
    id: "experience",
    title: "Experience",
    type: "timeline",
    items: [
      {
        title: "Consulting Intern",
        period: "Jun 2025 - Aug 2025",
        organization: "Company",
        location: "Madrid, Spain",
        description: "What you did and the result.",
      },
    ],
  },
]
```

To add a new experience, project, certification, or testimonial, duplicate one object inside that section's `items` list.

To add a new section, add a new object to `sections`. Supported section types are:

- `text`
- `cards`
- `timeline`
- `list`
- `testimonials`
- `contact`

Example:

```js
{
  id: "awards",
  title: "Awards",
  type: "list",
  items: [
    {
      title: "Case Competition Finalist",
      meta: "2026",
      description: "Short explanation.",
    },
  ],
}
```

The old Framer export is preserved in `agreeable-reservation-488504.framer.app_tostatic/`.
