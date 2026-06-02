# Theo Website

This is a small static portfolio site. There is no build step.

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
