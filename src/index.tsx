import * as React from 'react'
import './styles.scss'

interface props{
  ComponentIf: React.FC,
  ComponentElse?: React.FC
  RenderIf: boolean,
  ComponentIfProps?: any,
  ComponentElseProps?: any
};

const RenCond: React.FC<props> = ({RenderIf,ComponentIf,ComponentElse,ComponentIfProps,ComponentElseProps})=>{

  return(
    <>
    {RenderIf && <ComponentIf {...ComponentIfProps} /> } 
    {!RenderIf && ComponentElse && <ComponentElse {...ComponentElseProps}/>}
    </>
  );
}
export default RenCond;
