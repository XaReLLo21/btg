import { hotell } from '../../../../databcn'

export default function handler({ query: { title } }, res) {
  const filtered = hotell.filter((artikel) => artikel.title === title)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: 'Artikel finns inte' })
  }
}
