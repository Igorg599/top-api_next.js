import { useState } from "react"
import { Htag, Button, P, Tag, Rating } from "../components"
import { withLayout } from "../layout/Layout"

function Home(): JSX.Element {
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
    </>
  )
}

export default withLayout(Home)
