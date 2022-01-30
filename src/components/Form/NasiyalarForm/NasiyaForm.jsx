import React from 'react';
import { Container, Wrapper } from './NasiyaFormStyle';
import { Link } from '../../Sidebar/style';
import {ButtonWrapper, Button} from '../KundalikHisobotForm/KundalikHFormStyle'

const NasiyaForm = () => {
  return (
    <Container>
        <Wrapper>
    <h1>Nasiya savdo</h1>
        <form>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="inputAddress">Ism</label>
              <input type="text" className="form-control" placeholder="Haridor ismi" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputAddress">Familya</label>
              <input type="text" className="form-control" placeholder="Haridor familyasi" />
            </div>
          </div>
          <form>
        <div className="form-row">
        <div className="form-group col-md-6">
         <label htmlFor="inputCity">Bugungi sana</label>
         <input type="date" className="form-control" id="inputCity" />
        </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">Muddat sana</label>
      <input type="date" className="form-control" id="inputCity" />
    </div>
   </div>
 
  <div className="form-group">
      
    <label htmlFor="inputAddress">Manzil</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>

  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">Telefon raqam</label>
      <input type="tel" className="form-control" id="inputCity" placeholder="+99890.000-00-00" />
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputState">Rang</label>
      <select id="inputState" className="form-control" value="">
        <option >Choose...</option>
        <option> Green</option>
        <option> Yellow</option>
        <option> Red</option>

      </select>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputZip">Ma'sul shaxs</label>
      <select id="inputState" className="form-control" value="">
        <option >Choose...</option>
        <option> Turg'unov Yusufbek</option>
        <option> Begaliyev Begzod</option>
        <option> Begaliyev Begali</option>
        <option> Sodiqov Alisher</option>
        <option> Alimov Ravshanjon</option>
        <option> Rafiqov Nodirjon</option>
        <option> Umurzoqov Axadjon</option>
        <option> Usmonov Bilolxon</option>
        <option> Hakimaxon</option>
      </select>
    </div>
  </div>
  <ButtonWrapper>
  <Link form to="/">
  <Button type="submit" className="btn btn-danger">Ortga</Button>
  </Link>
  <Button extra type="submit" className="btn btn-primary">Yuborish</Button>
  </ButtonWrapper>
</form>
        </form>


        </Wrapper>


    </Container>

  )
};

export default NasiyaForm;
