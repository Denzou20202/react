import {useForm} from "react-hook-form";
import type {ICar} from "../../models/ICar.ts";
import {addCar} from "../../services/api.service.ts";
import {carValidator} from "../../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";

export const CreateCar = () => {

  const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
    mode: "all",
    resolver: joiResolver(carValidator)
  })
  const createHandler = (data: ICar) => {
    addCar(data)
  }
  return (
    <div>
      <h3>Add car</h3>
      <form onSubmit={handleSubmit(createHandler)}>
        <div>
          <p style={{marginBottom: 0}}>Brand</p>
          <input type="text" {...register('brand')} />
          <div>{errors.brand?.message}</div>
        </div>
        <div>
          <p style={{marginBottom: 0}}>Year</p>
          <input type="number" {...register('year')} />
          <div>{errors.year?.message}</div>
        </div>
        <div>
          <p style={{marginBottom: 0}}>Price</p>
          <input type="number" {...register('price')} />
          <div>{errors.price?.message}</div>
        </div>
        <button style={{marginTop: 15}}>Add car</button>
      </form>
    </div>
  );
};