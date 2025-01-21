import { useData } from "../context/DataContext"
import { colours } from "../data/colours"

const Groups: React.FC = () => {
    const { data } = useData()

    return (
        <div className="p-8 flex space-x-10 border-y border-[#8C7A98] text-white">
            {Object.keys(data).map((category, index) => {
                const color = colours[index % colours.length] // Cycle through colours
                return (
                    <div key={category} className="mb-6">
                        <h3
                            style={{ color }}
                            className="text-lg font-semibold uppercase"
                        >
                            {category}
                        </h3>
                        {data[category as keyof typeof data].length > 0 ? (
                            <ul
                                style={{ borderColor: color }}
                                className="mt-2 border-l-2 px-3"
                            >
                                {data[category as keyof typeof data].map((item) => (
                                    <li key={item.name} className="mt-1">
                                        <a
                                            href={item.link}
                                            className="text-white hover:text-[#8C7A98] transition-all font-courier text-xl"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 mt-2">No Favourites?</p>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Groups
