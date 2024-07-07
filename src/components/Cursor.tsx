import useMousePosition from "./UseMousePosition"

function Cursor() {
    const mousePosition = useMousePosition()
    const transform = `${mousePosition.x! - 10}px, ${mousePosition.y! - 10}px`

    return (
        <div id="trailer" className="z-50 bg-white size-5 rounded-full fixed left-0 top-0 pointer-events-none origin-center" style={{ transform: `translate(${transform})` }} ></div>
    )
}

export default Cursor
