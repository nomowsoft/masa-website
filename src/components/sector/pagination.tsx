const pages = [1,2,3,4,5,6];

const Pagination = () => {
  return (
    <section className="flex justify-center items-center py-10">
        <div className="border border-success text-success py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition rounded-lg mx-2">
            السابق 
        </div>
        {pages.map(page => (
            <div key={page} className="border border-success text-success py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition rounded-lg">
                {page}
            </div>
        ))}
        <div className="border border-success text-success py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition rounded-lg mx-2">
            التالي  
        </div>
    </section>
  )
}

export default Pagination