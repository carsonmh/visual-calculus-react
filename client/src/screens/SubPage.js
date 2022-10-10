import Visualization from "../components/Visualization";

function SubPage({ item, title }) {
    return (
        <div class="element">
            <h1 class="element-header">{title}</h1>
            <Visualization />
        </div>
    )
}

export default SubPage;