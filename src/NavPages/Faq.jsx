import {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
const Faq = () => {
    const faqData = [
        { question: 'Can I work on a project I started before the hackathon?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar risus id purus ullamcorper, a efficitur erat fermentum. Phasellus vitae lorem a augue imperdiet posuere. Ut tristique, ligula non bibendum fringilla, tortor ligula tincidunt odio, id scelerisque quam nunc a turpis.' },
        { question: 'What happens if I need help during the hackathon?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar risus id purus ullamcorper, a efficitur erat fermentum. Phasellus vitae lorem a augue imperdiet posuere. Ut tristique, ligula non bibendum fringilla, tortor ligula tincidunt odio, id scelerisque quam nunc a turpis.' },
        { question: 'what happen if i don"t have an idea for a project', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar risus id purus ullamcorper, a efficitur erat fermentum. Phasellus vitae lorem a augue imperdiet posuere. Ut tristique, ligula non bibendum fringilla, tortor ligula tincidunt odio, id scelerisque quam nunc a turpis.' },
        { question: 'Can I join a team or do I have to come with one?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar risus id purus ullamcorper, a efficitur erat fermentum. Phasellus vitae lorem a augue imperdiet posuere. Ut tristique, ligula non bibendum fringilla, tortor ligula tincidunt odio, id scelerisque quam nunc a turpis.' },
        { question: 'What happens after the hackathon ends', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar risus id purus ullamcorper, a efficitur erat fermentum. Phasellus vitae lorem a augue imperdiet posuere. Ut tristique, ligula non bibendum fringilla, tortor ligula tincidunt odio, id scelerisque quam nunc a turpis.' },
        { question: 'Can I work on a project I started before the hackathon?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar risus id purus ullamcorper, a efficitur erat fermentum. Phasellus vitae lorem a augue imperdiet posuere. Ut tristique, ligula non bibendum fringilla, tortor ligula tincidunt odio, id scelerisque quam nunc a turpis.' },
        // Add more FAQ items as needed
      ];
      const [expandedItems, setExpandedItems] = useState([]);
      const toggleItem = (index) => {
        if (expandedItems.includes(index)) {
          setExpandedItems(expandedItems.filter((item) => item !== index));
        } else {
          setExpandedItems([...expandedItems, index]);
        }
      };
  return (
    <div className="max-w-2xl mx-auto py-8 ">
    {faqData.map((faqItem, index) => (
      <div key={index} className="mb-4">
        <div className="flex items-center justify-between cursor-pointer " onClick={() => toggleItem(index)}>
          <div className="font-bold mr-2 ">{faqItem.question}</div>
          <div className={expandedItems.includes(index) ? 'rotate-180' : 'rotate-0'}><AiOutlinePlus/></div>
        </div>
       
        {expandedItems.includes(index) && <div className="text-gray-700 mt-2">{faqItem.answer}</div>}
        <div className='border border-b-[#D434FE] border-t-transparent border-r-transparent border-l-transparent border-opacity-100 w-[100%] mt-4 '></div>
      </div>
    ))}
  </div>
  )
}

export default Faq
