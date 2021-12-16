import { GetStaticProps } from "next"
import { useState } from "react"
import axios from "axios"
import { Htag, Button, P, Tag, Rating } from "../components"
import { withLayout } from "../layout/Layout"
import { MenuItem } from "../interfaces/menu.interface"

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(2)
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <P size="l">Big</P>
      <P size="s">Small</P>
      <Tag size="m" color="red">
        vsdfsdfD
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  )
  return {
    props: {
      menu,
      firstCategory,
    },
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
