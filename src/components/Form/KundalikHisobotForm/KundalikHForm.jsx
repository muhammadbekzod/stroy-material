import React from 'react';
import { Link } from '../../Sidebar/style';
import { AddWrap, Button, ButtonWrapper, Container, Extracon, Form, Wrapper, WrapperCon, WrapperConMini } from './KundalikHFormStyle';
import  './FormJs';

const KundalikHForm = () => {
    
  return(
      <Container>
    <Form>
        <h1>
            Kundalik hisobot
        </h1>
    <form>

  <Wrapper className="form-group" role="form" autocomplete="off">
    <label for="exampleInputEmail1">Aylanma chiqimlar</label>
    <WrapperCon >
    <Extracon role="form" autocomplete="off">
    <select class="form-control" id="exampleFormControlSelect1">
    <option selected>Choose...</option>
      <option>EPA</option>
      <option>DUSEL</option>
      <option>AKFA</option>
      <option>HAYAT</option>
      <option>PLASTHERM</option>
      <option>PLINT.UZ</option>
      <option>Boshqa chiqim</option>
    </select>
    <Extracon extra>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="1.000.000" />
    </Extracon>
    </Extracon>

    </WrapperCon>
    <AddWrap  id="add-more" name="add-more">+</AddWrap>
  </Wrapper>

  <Wrapper className="form-group">
    <label for="exampleInputEmail1">Chiqimlar</label>
    <WrapperCon>
    <select class="form-control" id="exampleFormControlSelect1">
    <option selected>Choose...</option>
      <option>Tushlik</option>
      <option>Non</option>
      <option>Choy</option>
      <option>Yoqilg'i</option>
      <option>Sadaqa</option>
      <option>Hodimga</option>
      <option>Boshqa chiqim</option>
    </select>
    <Extracon extra>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="1.000.000" />
    </Extracon>
    </WrapperCon>
    <AddWrap  id="add-more" name="add-more">+</AddWrap>
  </Wrapper>
  <Wrapper className="form-group">
   
    <label for="exampleInputEmail1">Umumiy nasiyalar</label>
 
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
    </Wrapper>
<Wrapper className="form-group">
<WrapperCon>
    <WrapperConMini>
    <label for="exampleInputEmail1">Naxt pul savdo</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="naxt pul savdo" />
    </WrapperConMini>
    <WrapperConMini>
    <label for="exampleInputEmail1">Plastik savdo</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="plastik savdo" />
    </WrapperConMini>
</WrapperCon>
  </Wrapper>
  <Wrapper className="form-group">

  </Wrapper>
  <Wrapper className="form-group">
  <WrapperCon>
    <WrapperConMini>
    <label for="exampleInputEmail1">Qaytgan nasiya</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="qaytgan nasiya" />
    </WrapperConMini>
    <WrapperConMini>
    <label for="exampleInputEmail1">Jami savdo</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="jami savdo" />
</WrapperConMini> 

</WrapperCon>
 </Wrapper>
 <Wrapper className="form-group">
 <WrapperCon>
    <WrapperConMini>
  <label for="exampleInputEmail1">Hisob topshiruvchi</label>
    <select className="form-control" id="exampleFormControlSelect1">
    <option selected>Choose...</option>
      <option>Akmal</option>
      <option>Bobur</option>
      <option>Alisher</option>
      <option>Mashrab</option>
      <option>Yusufbek</option>
    </select>
    </WrapperConMini>
  <WrapperConMini extra>
    <label for="exampleInputEmail1">Menejerga o'tdi</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="qabul qilingan summa" />
</WrapperConMini>

</WrapperCon>
<Extracon extrawrap>
<div className="custom-file">
<label for="exampleInputEmail1">Bugungi Savdo varaqasi</label>
  <input type="file" className="custom-file-input" id="customFileLang" lang="es"/>
  <label className="custom-file-label" for="customFileLang">iltimos bugungi chekni yuklang...</label>
</div>

    <label for="exampleInputEmail1"><p> Qo'shimcha ma'lumot </p></label>
    <textarea type="textarea" className="form-control" placeholder="" />
 </Extracon>
  </Wrapper>
  
  <ButtonWrapper>
  <Link form to="/">
  <Button type="submit" className="btn btn-danger">Ortga</Button>
  </Link>
  <Button extra type="submit" className="btn btn-primary">Yuborish</Button>
  </ButtonWrapper>
</form>
</Form>


</Container>

  )
};

export default KundalikHForm;
