import { Htag, Button, P } from "../components"

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <P size="l">Big</P>
      <P size="s">Small</P>
    </div>
  )
}
