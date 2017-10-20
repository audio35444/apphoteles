import Firebase from './firebase.js';
const itemsRef = Firebase.database().ref();
export const   ListenForItems=(callThis)=> {
  itemsRef.on('value',(hoteles)=>{
    var items = [];
    if(hoteles.val()){
      hoteles.val()['hoteles'].forEach((element)=>{
        items.push(element);
      });
      callThis.setState({
        dataSource: callThis.state.dataSource.cloneWithRows(items),
        loaded:true,
        hoteles:items,
        text:''
      });
    }
  });

};
export const ListenForId=(callThis)=> {
  itemsRef.on('value',(hoteles)=>{
    var item = null;
    if(hoteles.val()){
      hoteles.val()['hoteles'].forEach((element)=>{
        if(callThis.state.id == element.id)item=element;
      });
      callThis.setState({
        hotel:item
      });
    }
  });
};
