import styles from "./Menu.module.css"
import cn from "classnames"
import { useContext } from "react"
import { AppContext } from "../../context/app.context"
import { FirstLevelmenuItem, PageItem } from "../../interfaces/menu.interface"
import CoursesItem from "./icons/courses.svg"
import ServiceItem from "./icons/service.svg"
import BooksItem from "./icons/books.svg"
import ProductsItem from "./icons/products.svg"
import { TopLevelCategory } from "../../interfaces/page.interface"

const firstLevelMenu: FirstLevelmenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesItem />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServiceItem />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksItem />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsItem />,
    id: TopLevelCategory.Products,
  },
]

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext)

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <div key={menu.route}>
            <a href={`/${menu.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: menu.id == firstCategory,
                })}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </a>
            {menu.id == firstCategory && buildSecondLevel()}
          </div>
        ))}
      </>
    )
  }
  const buildSecondLevel = () => {
    return (
      <div>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevel()}
            </div>
          </div>
        ))}
      </div>
    )
  }
  const buildThirdLevel = (pages: PageItem[]) => {}

  return <div className={styles.menu}>{buildFirstLevel()}</div>
}
