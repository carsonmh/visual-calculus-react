import { useEffect } from "react";
import { Link } from "react-router-dom";

function ItemLink({ title, urlName, setItem, setTitle }) {
    function SetData(item, title) {
        setItem(item)
        setTitle(title)
    }

    return (
        <li class="topics-item">
            <Link
                to={"/subItem"}
                onClick={() => { SetData(urlName, title) }}>
                {title}
            </Link>
        </li>
    );
}

export default ItemLink;