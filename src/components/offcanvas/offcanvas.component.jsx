import { Component } from "react";
import  Offcanvas  from "react-bootstrap/Offcanvas";
import { useParams ,Navigate } from "react-router-dom";
import "./offcanvas.style.css"


class OffCanvas extends Component{
    constructor(){
        super();
        
        
        this.state={
            show :true,
            navigate:false,
            data:{
                title:'',
                desc:'',
                username:'',
            }
        }
        
    }
    
    componentDidUpdate(){
        
    }
    handleClose = ()=>{
        this.setState(() =>{return {show:false}})
        
    }
    
    componentDidMount(){
        const {service_id} = this.props.params;
            console.log(this.props)
        fetch(`http://localhost:5000/posts/${service_id}`)
        .then((res)=> res.json())
        .then((data)=> this.setState(() => ({data:data})))
        
    }
    
    render(){
        const {show,data}=this.state;
        
        
        
        if(this.state.navigate) return <Navigate to='../../'/>
        if(!this.state.show) setTimeout((e)=>{
            this.setState(() => {return {navigate:true}})
        },500) 
        return (
            <Offcanvas show={show} onHide={this.handleClose} backdrop="static" id="detailOffCanvas">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{data.title}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <h1>{data.username}</h1>
                <h5>{data.desc}</h5>
                
                
            </Offcanvas.Body>
      </Offcanvas>
        )
    }
}

export default (props) => (
    <OffCanvas
        {...props}
        params={useParams()}
    />
);
;