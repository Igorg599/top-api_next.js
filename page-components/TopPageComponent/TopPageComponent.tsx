import { TopPageComponentProps } from "./TopPageComponent.props"
import styles from "./TopPageComponents.module.css"
import { Htag, Tag } from "../../components"

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m" aria-label={products.length + "элементов"}>
            {products.length}
          </Tag>
        )}
      </div>
    </div>
  )
}
