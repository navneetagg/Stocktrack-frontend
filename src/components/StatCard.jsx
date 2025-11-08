function StatCard({title,value}){
    return(<div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-sm font-medium text-gray-400 uppercase">
            {title}
        </h3>
        <p className="text-3xl font-bold text-white m-2">{value}</p>
    </div>)
}
export default StatCard;