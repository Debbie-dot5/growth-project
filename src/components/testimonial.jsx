import React from 'react'


// add color white to text




const Testimonial = () => {

    const testimonials = [
        {
            quote: "Our business has seen a significant increase in productivity since we started using the Growth app.",
            name: "Katherine Smith",
            company: "Capodopera",
          },
          {
            quote: "As a small business owner, it's important to have a tool that can help me keep track of everything. The Growth app has been a lifesaver for me, allowing me to manage my contacts, schedule appointments, and track progress all in one place.",
            name: "Jonathan Lee",
            company: "Red Bolt",
          },
          {
            quote: "The dashboards and reporting feature has provided valuable insights into our performance and helped us make data-driven decisions. It's a game changer for us.",
            name: "David Wilson",
            company: "Slide",
          },
          {
            quote: "Our business has seen a significant increase in productivity since we started using the Growth app.",
            name: "Katherine Smith",
            company: "Capodopera",
          },
    ]




  return (
    <div>
      <h1> 
      Don't just take our word for it, see the success
        stories from businesses just like yours.
      </h1>

      <div className=' flex space-x-6  overflow-x-scroll'>
            {testimonials.map((testimonial, index) => (
                <div key={index} className='bg-gray-100  px-6 py-8  h-[452px] w-[406px] rounded-2xl'>
                <h3 className="text-lg font-semibold text-gray-800">“{testimonial.quote}”</h3>
                <p className="text-sm  pt-10 font-bold text-gray-700">{testimonial.name}</p>
                <span className="text-xs text-gray-600">{testimonial.company}</span>
              </div>
            ))}            
      </div>
    </div>
  )
}

export default Testimonial
