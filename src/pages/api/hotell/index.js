import { hotell } from '../../../../databcn'

export default function handler(req, res) {
  res.status(200).json(hotell)
}
