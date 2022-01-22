import React, {Component} from "react";
import jsonData from '../res/text.json'
import jsonData2 from '../res/text2.json'
import './CContents.css'

class CContents extends Component{

    constructor(){
        super()
        this.state = {msg: 'Witaj użytkowniku, kliknij przycisk aby poznać wiadomość'}
        this.txtData = () => JSON.parse(JSON.stringify(jsonData));
        this.txtData2 = () => JSON.parse(JSON.stringify(jsonData2));
        const imgContext = require.context('../res/', false, /\.jpg$/);
        let img = {};
        this.imgs = imgContext.keys().reduce( (icons, file) => {
            const cname = imgContext(file);
            const label = file.slice(2,-4);
            img[label] = cname;
            return img;
        }, {});
        
        // this.changeMsg = this.changeMsg.bind(this);
    }
    changeMsg = () =>{
        this.setState({msg: 'Właśnie jesteś uczestnikiem kursu React, gratulacje!'});
        console.log("przycisk został wciśnięty");
    }
    render(){
        // const items = [];
        // for(let i=0; i<this.txtData().count; i++){
        //     let value = this.txtData().text[i];
        //     items.push(
        //         <div className="contentsFlex" key={Math.random()}>
        //             <img className="contentsFlexImg" src={this.imgs['img'+(i+1)]} alt="zdj"/>
        //             <p className="contentsFlexTxt">{value}</p>
        //         </div>
        //     )
        const tabData = this.txtData2().data;
        const items = tabData.map( (item) => (
            <div id={`"div${item.id}"`} className="contentsFlex" key={item.id}>
                <img className="contentsFlexImg" src={this.imgs[item.img]} alt="zdj"/>
                <p className="contentsFlexTxt">{item.text}</p>
            </div>
        ));

        return(
            <div className="contentsDivClass">
                {items}
                <h1>{this.state.msg}</h1>
                <button onClick={this.changeMsg}>Kliknij, aby poznać tejemnicę</button>
            </div>
        )
    }
}
export default CContents