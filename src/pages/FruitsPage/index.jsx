import { useSelector } from "react-redux"

export default function FruitsPage () {

    const fruits = useSelector((state) => state.fruits);

    return (
        <div>
            {fruits.map((fruit) => (
                <p key={fruit}>{fruit}</p>
            ))}
        </div>
    )
}
