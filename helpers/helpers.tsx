import CoursesItem from "./icons/courses.svg"
import ServiceItem from "./icons/service.svg"
import BooksItem from "./icons/books.svg"
import ProductsItem from "./icons/products.svg"
import { TopLevelCategory } from "../interfaces/page.interface"
import { FirstLevelmenuItem } from "../interfaces/menu.interface"

export const firstLevelMenu: FirstLevelmenuItem[] = [
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
