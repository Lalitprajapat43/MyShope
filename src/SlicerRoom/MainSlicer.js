import { createSlice } from "@reduxjs/toolkit";
import Address from "../Pages/Address";
import { useState } from "react";


const initialState ={
  AllProduct:[
      // Mans Wear
      { ProductName: 'Smartphone', id: 'Electronics',slectopt:'Model Name', img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISERAQEA8VDxAVFQ8PDw8QEBAPEA8PFRUXFhUVFRcYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGyslHSUtLS0tLS0tLS0tLS0rKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS01LS0tLS0rLf/AABEIALEBHAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQcGAQj/xABNEAABAwICAg0EDgkEAwEAAAABAAIDBBESIQUxBgcTIjJBUWFxcnOxsiOBkbMUMzVCUlRidJOhtMHC0RUWJVOCkqLE8CQ0ROFjg6ND/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAKBEAAgIBAwIHAAMBAAAAAAAAAAECEQMEITESURMiMjNBYfAUUpGB/9oADAMBAAIRAxEAPwDcUIQgBCTI8NBLiGgaySAB501BWxP4ErH9V7XdxQD6EIQAhCEAIUWt0lBDbdp44b8HdZGR4ujERdOQVUb/AGuRr+o9ru5APIQhACEJEsrWguc4NaMy5xDQOklALQmKerjk9rkZJ1Htd3FPoAQhCAEITDayMkgSsJBsQHtuDyHNAPoQChACEIQAhCjS6QhacLpo2u+C6RgPoJQElCifpOD4xF9Kz80fpSD4xF9Kz80BLQon6Ug+MRfSs/NefpWn+MRfSx/mgJiFE/SkHxiL6Vn5o/ScH7+L6Vn5oCWhJjkDhdpDhxEEEFKQAhCEAIQhAZltrVePdYzvoqeBs7ojwJZZN1wYx74N3E5HI4s9SzKKkZDHFje5ofdrN+4Auba+QPyhnqWibZnC0n81o++sWWbKAAaewzMN3HPhbtIMQ5DZrR5lqjLox2jtOkX8VXPH7VVTR87Zn3HnupsOyzSMfBr5Hcm6BkneM/OqeJ28b1W9yQ4rX0xfKLOTqINsfSTOFLFL14A0n+UhTqbbbqwQJKSCTitG+SIn04rLg3lJgzkjHy2D+oLiWKFcHNI82R4qgxz1J3SaoqJ3Oecy2GJoLGMvwW3dqHwQkSQBrizNrmGxAcd6RxZHWPuU7SQH7NB1brUgjmsxVT3eVIGQDngdFzYeheYVE6PSlTHlFWVEXUqJW/epsWznSkY3ukZD2jIZfG0qmkKjSlAddDts6VZrfTzdpTkX6cD2qz2U6ZnrqAz1QZvaeORsMYduHsiYmzi1xOKzHxkXvYgrM5Cu/n9yH9jQerhXePkry+kqKbRcUbYmOkeHOALfKP5bXyOWYPoKs43zx+1VtRH1Z3/mqXTbw1wwjWyMk8YPGRz5WVw960wak2q4M+RdKT7kuPZLpKPgaRkPJujY5PE3NSotsPSrNckE3Xgw36cDgqKR6jvcu3jj2OFkl3NH2O7L6uvbJBOyOC7oo90pzI1xDmzSOAuSW3bA5twb7+4Isr6ofTUsLpZLQwsOABrTk0HCAGtzPmXD7Wx8q/taf7NXqftqOApKd1rkVDrA6jvJMjzZBefmivEo9XTzaw9XydpSRwyMbLC7Ex4xNe0mxH+cSd3N41TPHNiJH1rltqh5Ojhc3tLMAOQXBsPOSuvKpap7GiMupWxrdpxqmvzOY0r0aQqB+7d0tcD9RQ4pKi33OumL+EcdtkaVqZ/Y9DC8026uImfG48HC517ixsGsdlxuLVzUWwOmYABLO7K7jupZvjryAA+pdNshF6+m6r/VyKVua9bSQg4XJWzwdfLIsvTB0jkf1Kp/3k/07lW7INhuGnkdSSTGdoDmNMpcHgHfNsRrte3OAu+3NeFi1PHiaqkYozzJ31MwGSGvByjqee8UuR9C6DYjoGoqJneyDURwNbcl2KEvkJsGi4z4ybcg5VruBJLFRHSwTtuzTPVZJRpKjlP1Ng/eT/TuXg2F05IBknAuATuzjYcZ511RYklq0+Hi/qv8MvVm/s/9OXotHO0RVQz0VVJJTPeG1ETyQx1wTex13thucwXA3W7ArGtkrfIjtIu9bK3UF52phGM6ienpZylDzdz1CELOaQQhCAynbO4WkvmtF31iyTZM/fRk3AEYa3LJzsRcRf8AiWubZwFtJHj3OmbfmEcxA9Lj6Ss2r6pjXQMe3HezzyRXOFh5ySHdAA5VqpPHTZPwPx5NaDrwt7khxTjymXFazuxDyvKX22Lrx+ILxxRS+2x9ePxBQ3sRZI0ybDR55H1Z/paqKN95eO5LyWkWwhXWmeBo/rVfHf3reNQZC3dJAMyCQH24bWnDfmGWroXlHAl5UaUp+QqJKVAGXlaBUH9kO7Gg9XCs9eVoE4/Y5PLDSXzJ4ox3AKzHyV5fScnp2U7pncHDGGC2UhOWv0+ddE9yjTvZihxNDjYEPIHk3kkBo5zgvfiuEuRy1Y0k2zPkdpCXuTDnL17ky5ysKjttrI+Vf2tP9mr1K23gfYlObEMFQ4yPAuI22c0E85LgB0qJtUi801+IwuHMdzqRf0EjzldTs001HS0ZMlO2q3WQwtgecLH3xOdiNjYYWu4uQLzs3u/ux6un9j93ZC2niToxriLB01QWn4QDsN/S0+hdo5QtA1MUlLTyQRiKF0bHRxBoaI2kcCwyFtWXIpbiqJcmmGyoS5JK9ckFQd2cppwftCm6r/VyKwLVA0z7oU3Vf6uRWRW7Fk6Y0eflw9c2xotXhanCklW+MV/xRstSS1OFIJXXjEfxRstSCE44pDnLpZR/FKXZQPIjtIu9bE3UPMsd2THyI7SLvWuULiY4ycyWMJPOQFnzS6pWdxx9CofQhCpOgQhCAyjbOdlpIfIpfrimXBO0NujBUlhLYiwOcCALki1xrIuR6V3O2eCHaT5DDRPHNdtU38H1rkKYOMMlnkNG5lzBwX68znxW5FtgvIhZBeUy4p2QphxV1k2IeUUntsXXj8QSXFFIfKxdePxBct7Cx/TJ3lB1qrwtTNZox8OBz24d1Y2VmYILD0ajzc6d02LMoAcyHVQJ1e9amat7iGFz3Ps0NaHEnA0Ws0Z6s15rIIchUSQp+UqM8qAMvK0CZ37HPNFSD+mM/es9eV38rCNDvub3ionDK1gYocvTdWY+SvL6SL+jSY21OE4GkR4ri2MjK418SYe5SosRpz5QhjSHbn70uOEYtevMcXEFXvctkTLLcHuTLnL1zky9yHNHe7UrvLz/APp9XULu9L6Fgq4NxqAS3dCWlhwva/Ec2ni41n21Nfd5D8uBhHTBWO/B9a1OkaC0g/Cfz++K8/N7j/fB6um9n93Z5SUrIo44Y24Y42tjY3M2a0WAudfSlkpTk2SqmaDwpBSikLk6s5PT77V9Mfkv9XIpRqFWbL32q6c8zvVyKL7KK2Y8TlGycTik77l2ahJNQqQ1RXnso8qs8BlnVAujUJJnVN7JK8NSVPgsm4Fw6dNOnVS6pKbdVFdrCyHKA5sglvG0f+SLvWyUI8lF1GeELCNJTEtYPlsW9U7MLGN12a1t+Wwsqc0el0Yc7TlsOIQhVFIIQhAZLtnm50meMRUbOK1hHUOH1vcuJp5Tub28Ra1xGesEAZavfa/+12u2gyz9J58KCheRlkcNU3uYFw0Dt6/qfibqW3H6UcN7kd5TLinHlMPKsFiHFe0h8rF14/EEhxXtGfKxdePxBct7BMk6dO9oc776qz5cmqJM+7W81wOjJSdPNs2hF72dVC51nJqhSu3o6XdzV552RpSozynpCo7yoA08rv5X30MeaKkadXEyId1lnrytBqI8Oh3WJN4qJ2dsiYobgej61Zj5OMnpIUEx3J7Pe2a+1za+JovbV59ahucnKd28k6jfGzUoz3LYZAc5MucvXOTTnKAd9tROvUTDnheOkRVTc/M9y1SiOR6z/EVlG1CPLyuvnjp28WYdT1pP1satWo9X8TvEV5+f3Genpva/d2OOKQSlOTZVReBKQV6UkodHC7OnWqac9Pq5FXwTiykbYzrTQHn/AASLmPZBXq6WN4zK8nTJl1NOL5IYb8apRMV62pcNRWhw7Exy9y/jhJF7jj+pNzjDxqobXPGQeQlRVDnObcl2YyXChJO2y3xItUie5x5E06RTfYj8JIGK2sD/ADNVTJOMpGaZMk0Jq33wD5bPvX0HSvxMY46y1pPSRdfP+kCLxkC2/b96+gadmFjGjMBrQL68gsmeVysoyKmOIQhUFYIQhAZNtqcLSPzah/vFnoOQ6FoW2rwtI/NqH+8WdXyC2Y/SiiT8zEPKZcU48pl5XZFjbylUR8rF14/EE08pdEfKxdpH4goZKkTNkRyo+tVdzVVylWWyTVR9aq7mqplKwMvGnlR3lOvKYeVAGnlaLX+4w7Ci9VEs4cVo2kPcYdjReqiVuPk4ycHPNdkOgJDnLxrsh0BNuctVmQHOTTnIc5NuKgGh7Tx8rN2tL9mr1qlId6es/wARWU7Th8rP2lL9mr1qlGd6es/xFefn9Z6mm9v99jzikEr1xSCVSXBdJJRdeFLJM92yvboOn8Ei5Zls7ldNtmMJlgA13v8A0SLiJiQbL09NLyVZS1y6Oj0W2AtJkIuLjfGwCrZZGY3YODc4b8irsxbNePJBV8HUrsia24LGVwyKXSVAa5riL2INk1QQGR7W8t9eQAVlpJjWAR4c7Ag8VuXvVeTUx6ujuXYdO2nK+C0h0+xgOHfcjSDe/cqSeYOdyfemKVzN1Y1xs0kXJ4gpenqNjXNMTxexuMQNuT05+hUeJGGRRSdv5L0pSg3tSfBGlluYx8tv3r6Oj1DoC+Z4ibx3+GO4r6Yj1DoCjI7Zj1Hq/wCCkIQqygEIQgMl21uFpH5tQ/3ize+QWkba/C0j82of7xZniyC1w9KMuR+ZnjymXFKcU04ruzmxLil0R8rF2kfiCZJTlEfKxdpH4goYTJuyX/idaq/CqeQq22Tn/adap/CqaQrCbBp5TDynXlMOKAbcVo+kfcYdjReqiWbuK0fSfuM3saP1UashycZODlw7IJDnLwOyCQ4rSZDxxTbnIcU24qCDRtpk+Vn7Sl+zaQWq0Z3p6z/EVlG0x7bUdpS/ZtILVKM709Z/iK8/Ues9XT+2h9xTZK9cUglUWXnt14SvLrwpYOE2wW3mgH+e1yLhK+w5yCRkuu21ZMLoCDbfAcnvJFwLp78a9DAnVlfUqaHmPJPcryifGIi5/Czvq18QXOCe2pTdHjdHWOQUahOUd3SNOkyKE9lbfcuamVjWtkiNnXysfuUOaokfdxNzz617KQy7b3CgvrmjoXOFJrv9k5sm/b6GvZG+1q3ohHhJc+x4hxLmpZLkkdK83cjK60zhapOjFizdMrasvxIDIwNOQePPkV9Mx6h0BfLWj4HB8bnC2/Fs+Yr6lj1DoCzyq9mTn6upOSrYUhCFyUAhCEBku2xwtIfNqH+9WXYsgtQ22eFpD5tQ/wB6srxZBa4elGLK/Owc5NOK9cU24qTjqAlLoj5WLtI/EEwSnqH22LtI/EEYT3Juyk/7XrVP4VSvKuNlh/2vWqPwqkeViPQG3lMuKceUy4ogJctH0p7jN7Gj9VGs2K0fSvuMzsaP1UashycZODkgcgkOK8ByCQ4rQZAcU2SvSU2SgNJ2lz5So7Sl+zaQWp0Z3p6z/EVlW0v7ZUdpTfZtILUqM709Z/iK87Ues9XTe2PuKQShxSCVnLz269SLouhNGbbbuuDrt8EizolaVtowbo+naON49XIuJOiXh2Gy3480YRSbK44JztruVjQVa0jXNbfVxqWdF4WXyxZFMuJdvMhrVctQsi24L/40sTXdldU1BvrUJ7yVNqKazrOI5jzKLMMOrNasclWxlyY5J+YZuUXJSXSo3RW2ypRiXGj6575YGk5Ys+U2a7WvqyPUOgL5H0KPLwn5R8Ll9cR6h0BZpxSexOWcpu5MUhCFwVghCEBke23wtIfNqD+9WXQw4opZMVsG5AC43xeSPPk0rUdtzhV/zeg/vVmNG/8A09SM8/Y/Flk85E/5q5itMXsYM3uP98EIuSCV4SkrooUgJT1B7bF2kfiCjlP6P9ti7SPxBQ2dRe5N2XH/AGvWqPuVPOywab6xdW2y/wD43WqPuVRVu3sfV6M7lZD1CK4ptyU4psqQJK0fS3uMzsaP1UazhaPpf3HZ2NJ6qNdw5OJ8HKx0wMBlxWIe2MNuM7i+rWf+lDJVhC//AEcgz9uiOrIgMdx8uerpVaSr0ZWeEpBK9JSUINJ2l/bKntKb7NpBalQZgj5T+8rLdpjh1PXpvs2kFp+j3eJ/eVgzrznq6f2/32POKbJQXJBcqKNAq6LpvEvcSmgZ7tqzlhp3A2Ie3wSLmaZ8rnXc5uIYcUTT5RhcQG4gRruQLAkgkB1ibK+24BdsPXA/+ci56LBus0xma2OV7XMdHIwyBrqiOW+EXcxzWtde4yItncX0+HGUNznFllCW3ck1ku9Lt1a4NdgcWPDg11iQDy3sbEXabGxKqKill4TXAv3mKJpO6sLyA245SXNFhexIBsTZStISXieLQwOLrgUz2yB4MUrXB2F7rDNrRqA3V2RzsyS0TTyuma2OV7HMdHIx0rQ+pimJwC7mOaxrr3GRFs7i84cUYcFmfUSyVZArYHgYzI2QYhG4sfjwPIJDTy3DXWc27ThNibKFmrbSUl4nAsghcZY3hlNIyQP3kgcXBsjsIbvbWwjfusM8qhj+JalwZHzuKjjxFKdGGlSKSYRk5XvbzWUWqmuSeUkpbv6JpJfZP0KAZoTfPGcv4XL61j1DoC+Q9Bj/AFEJ4sR8Ll9eR6h0BVZOSqQpCEKs5BCEIDItt3hV/wA3oO+tWTRzkMcwanYCc3A729tRsdfGCtf24KRwdIfezwMja7i3SHdbM6SJrjqlYsyUWGYV8XsedqE/EY4UkpTGl3BBd1QXdykR6Nndk2nld0QyfkurM9pbMiJ/R/tsXaR+IKxh2K17+DRTH+C3erGh2AaVLmObQvaQWuG6OZHmDfO5yXLZ3F29io2Yf8brVHeFQyyE2HILDX0q72ZMew4JGGOSGeoY9jtbWv4B5xkcxlqXOmYco9IVB6x65NlOBhdwWud1Wl3cno9F1DrYaaU31Whkz+pAQytH0wf2PH2NJ6uNclFsQ0i/gaOqHdELiuw07QTx6NjhqIHwSGnYAyQYXGSFzmuH8jYj/HzFdQ5OJ8HEsqCIzH70ua85uvcAgZXtxniumCUhszbDMelLYxzuC1zuq1zu5aEZWn8iUKXFoqpdwaWd3RBJbuU+DYjpF/A0fO7+C31IDrtpnh1PXpvs2kFplE6wPWf4iuC2udj9bReyZaqkkhj8hIHOAsA1s0Tr55ACpxdDHLtoJAMQvxuIPKCbg+grFl9Z6ulVwJTimyUgyjlQA46mOPQxx+5V0aRV0XQ2nkOqJ/8AKR3p1uj5z/8Ai7z2CURa7ma7bZFoLm2/HgkXGQzUmFuKSUHe42YA629OLC7IHfW12yvxrvNunQM4pY5nM3odd1t9gwggYrZC4c4/w84WLCN3E0noBV64oySnTdHd07KKR5YJZQ3DdmLAwl9zvb2IOWHPLWeTOPNSxRuNnh5BFrkHzLjdwf8AAd/KUuGN4N9zJI1BzC5t+cEZrlxd87di2GpUY1079zqayjLxiFg23LmqmVgaq3cpPgf0tXpgfhN2cYtZoxfVxf8ASsjKtjjJlUndbkp7+RLpGsMkYlJERfGJnN4QixDGW8+G6rdwf8B38pXm5O+C70Fd+J9FXUdxWGibXU7dGvkkpy0F5mDg5sw3QOa3E0Etwhhz43HoH1LHqHQF8ibX2iZKivhjY0uN88jvQQRiPIBe55gvrxosAPMq27IbPUIQoIBCEICPX0MU8bop4mTRu4UcjWvafMVW0uxOhjyjo4mjkDb96ukJZzKEZepWRYtHQt4MEberGwfcpLWgZAADkAsF6hCVFR4QIQhCSn03sWoqwtdVUkc7m8F7278DkxDO3Mk0+xGgZk2hgHTE13iurpCAiw6NgZwII2cmGNje4KUhCAFD0pouCpYYqmFk8ZzwSsD235c9RUxCApaPYnQxACOjiaBqGC/erCLR0LeDBG3qxsHcFKQptkdK7HjWgCwFhyDIL1CFBIKDDoiBnAhawa7MGFoPMBkFOQhNsabTsGpjfQLpbWgagB0CyUhCAQhCAS9oIIIBByIIuCFTu2JUBJd7AgucyRDGLnlNgrpCApv1ToPiMH0TPyR+qlD8Rg+hZ+SuUICm/VOg+IwfRM/JefqlQfEofomq6QgKQ7EaD4lD9GEk7DtH/EYf5Ar1CAh6N0TT04LaenjgadYijZGD04RmpiEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCA//9k=', Price: 499.99 },
      { ProductName: 'Laptop', id: 'Electronics',slectopt:'Ram&Colour', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGNUv4skLMvz3IoRNbW7fuD-RqKj7hcpmkw&s', Price: 799.99 },
      { ProductName: 'Headphones', id: 'Electronics', img: 'headphones.jpg', Price: 49.99 },
      { ProductName: 'Smartwatch', id: 'Electronics', img: 'smartwatch.jpg', Price: 129.99 },
      { ProductName: "Atta", id: "Grains", img: "atta.jpg", Price: 1.50 },
    { ProductName: "Rice", id: "Grains", img: "rice.jpg", Price: 2.00 },
    { ProductName: "Oil", id: "Oils", img: "oil.jpg", Price: 3.50 },
    { ProductName: "Flour", id: "Grains", img: "flour.jpg", Price: 1.80 },
    { ProductName: "Sugar", id: "Sweeteners", img: "sugar.jpg", Price: 1.20 },
    { ProductName: "Salt", id: "Spices", img: "salt.jpg", Price: 0.80 },
    { ProductName: "Turmeric", id: "Spices", img: "turmeric.jpg", Price: 1.50 },
    { ProductName: "Cumin", id: "Spices", img: "cumin.jpg", Price: 2.30 },
    { ProductName: "Ghee", id: "Oils", img: "ghee.jpg", Price: 5.00 },
    { ProductName: "Mustard Oil", id: "Oils", img: "mustard_oil.jpg", Price: 3.00 },
    { ProductName: "Pulses", id: "Grains", img: "pulses.jpg", Price: 2.50 },
    { ProductName: "Chana Dal", id: "Grains", img: "chana_dal.jpg", Price: 2.20 },
      
  ],
 Cart:[

],


flex:[
  {id:'show',
    
    type:'checkbox',
    Name:'Lalit',
    Address:'Paliya Road Devatop Colonty Nagda 457226',
    Mobile:'7804084826',
    item:'show',
    setshow:'show'


    ,},
      {id:'show',
    
    type:'checkbox',
    Name:'Lalit',
    Address:'Paliya Road Devatop Colonty Nagda 457226',
    Mobile:'7804084826',
    item:"show",
    setshow:"hide"
    


    ,}
]
,
FullData:[],
}



 



const Mainslicer= createSlice({
  name: 'Main',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.Cart.push(action.payload);
    },
   
    AddToCart: (state, action) => {
    state.FullData.push(action.payload);
    },
    
     flex: (state, action) => {
      state.flex.push(action.payload);
    },
    deleteCart: (state, action) => {
      state.Cart.splice(action.payload, 1);
    },
     DeleteCart: (state, action) => {
      state.FullData.splice(action.payload, 1);
    },
  },
});

export default Mainslicer.reducer;
export const { addToCart,AddToCart, deleteCart,flex,DeleteCart } = Mainslicer.actions;
