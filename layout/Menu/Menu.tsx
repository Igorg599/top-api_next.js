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
import Link from "next/link"

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
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <a>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: m.id == firstCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    )
  }
  const buildSecondLevel = (menuItem: FirstLevelmenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    )
  }
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link href={`/${route}/${p.alias}`}>
        <a
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: false,
          })}
        >
          {p.category}
        </a>
      </Link>
    ))
  }

  return <div className={styles.menu}>{buildFirstLevel()}</div>
}
