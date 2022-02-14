import React from 'react';
import { Link } from '../../Sidebar/style';
import { Button, ButtonWrapper } from '../KundalikHisobotForm/KundalikHFormStyle';
import { Container, Wrapper } from './FirmaHFormStyle';

const FirmaHForm = () => {
  return (
    <Container>
        <Wrapper>
        <h1>Yangi firma qo'shish</h1>
        <form>
        <div className="row ">
            <div className="form-group col-md-6">
              <label htmlFor="inputAddress">Ism</label>
              <input type="text" className="form-control" placeholder="Firma hodimini ismi" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputAddress">Familya</label>
              <input type="text" className="form-control" placeholder="Firma hodimini familyasi" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-12">
              <label htmlFor="inputAddress">Firma nomi</label>
              <input type="text" className="form-control" placeholder="Firma nomi" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputAddress">Hodim telefon nomeri</label>
              <input type="number" className="form-control" placeholder="Firma hodimini telefon nomeri" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputAddress">Firma telefon nomeri</label>
              <input type="number" className="form-control" placeholder="Firma telefon nomeri" />
            </div>
          </div>
          <ButtonWrapper>
          <Link form to="/">
          <Button type="submit" className="btn btn-danger">Ortga</Button>
          </Link>
          <Button extra type="submit" className="btn btn-primary">Yuborish</Button>
          </ButtonWrapper>

        </form>
        </Wrapper>
    </Container>


  )
};

export default FirmaHForm;
