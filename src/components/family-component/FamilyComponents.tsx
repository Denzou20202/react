import {simpsons} from "../../data/data.ts";
import {CharacterComponent} from "../character-component/CharacterComponents.tsx";

export const FamilyComponents = () => {
  return (
    <div>
      {
        simpsons.map((value, index) => <CharacterComponent item={value} key={index}>
          {value.info}
        </CharacterComponent> )
      }
    </div>
  )
}