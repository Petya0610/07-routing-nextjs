import css from "./SidebarNotes.module.css"
import Link from "next/link";

const tags:string[] = ['All notes', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

export default function SideBarNotes() {
    return (
<ul className={css.menuList}>
      <li className={css.menuItem} key={"All"}>
        <Link href={"/notes/filter/All"} className={css.menuLink} >
          All
        </Link>
      </li>
       {tags.map(tag => (
        <li className={css.menuItem} key={tag}>
            <Link 
            href={`/notes/filter/${tag}`} className={css.menuLink}
            >{tag}
            </Link>
        </li>
       ))}
    </ul>
    );
}
