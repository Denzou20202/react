import type {ICharacter} from "../../model/ICharacter.ts";
import type {ReactNode} from "react";
import "./character-style.css"

interface CharacterComponentsProps {
  item: ICharacter,
  children: ReactNode
}

export const CharacterComponent = ({item, children}: CharacterComponentsProps) => {
  return (
    <div className='my-6 border-2'>
      <h3 className='font-bold text-2xl'>{item.name} {item.surname}</h3>
      <img src={item.photo} alt={item.name}/>
      <p>{children}</p>
    </div>
  )
}