import { decorators, Treebeard } from "react-treebeard";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { useSelector } from "react-redux";
import { stylesTreeBeard } from "./stylesTreeBeard";
import React, { useState } from "react";
import { SiGooglemybusiness } from "react-icons/si";
import { SiAirtable } from "react-icons/si";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdNoFood } from "react-icons/md";
import { RiMotorbikeFill } from "react-icons/ri";
import { MdRoomService } from "react-icons/md";
import { MdOutlinePointOfSale } from "react-icons/md";
import { MdInventory } from "react-icons/md";
import { MdOutlineFastfood } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const PanelVistaArbol = () => {
  const { nombreRestaurante } = useSelector((state) => state);
  const navigate = useNavigate();
  const [cursor, setCursor] = useState(false);
  const funcionalidades = 
  [
      {
        id:12,
        title: nombreRestaurante,
        toggled: true,
        children: [

          {
            id: 1,
            title: "Mesas",
          },
          {
            id: 2,
            title: "Menú",
          },
          {
            id: 3,
            title: "Nomina",
          },
          {
            id: 4,
            title: "Servicio en mesa",
          },
          {
            id: 4,
            title: "Domicilios",
          },
          {
            id: 5,
            title: "Rapi service",
          },
          
          {
            id: 6,
            title: "Inventario",
          },
        ]
      }
      ,
      {
        title:"Platos"
      },
      {
        title:"Ventas"
      },
      {
        title:"Productos"
      },
      {
        title:"Empleados"
      }
      
    ]

  


;
  const Header = ({ onSelect, style, customStyles, node }) => {
    const iconType = "folder";
    const iconClass = `fa fa-${iconType}`;
    const iconStyle = { marginRight: "5px" };

    return (
      <div
        style={style.base}
        onClick={onSelect}

        //style={{ backgroundColor: "red" }}
      >
        <div
          style={
            node.selected
              ? { ...style.title, ...customStyles.header.title }
              : style.title
          }
        >
          {node.title == "Mesas" && <SiAirtable size={20}  />}
          {node.title == "Menú" && <MdOutlineMenuBook size={20} />}
          {node.title == "Nomina" && <FaUsers size={20} />}
          {node.title == "Servicio en mesa" && <MdNoFood size={20} />}
          {node.title == "Domicilios" && <RiMotorbikeFill size={20} />}
          {node.title == "Rapi service" && <MdRoomService size={20} />}
          {node.title == "Ventas" && <MdOutlinePointOfSale size={20} />}
          {node.title == "Inventario" && <MdInventory size={20} />}
          {node.title=="Platos" && <MdOutlineFastfood size={20}/>}
          {node.title=="Productos" && <MdProductionQuantityLimits size={20}/>}
          {node.title=="Empleados" && <BsFillPeopleFill size={20}/>}
          {(node.title == "Inventario") ||
            (node.title == "Ventas") ||
            (node.title == "Rapi service") ||
            (node.title == "Domicilios")||
            (node.title == "Servicio en mesa")||
            (node.title == "Nomina")||
            (node.title == "Menú") ||
            (node.title == "Mesas") ||
            (node.title == "Platos") ||
            (node.title == "Productos") ||
            (node.title == "Empleados")
            ? console.log("no hacer nada"):
          
            <SiGooglemybusiness size={25} />
          }
          {node.title}
        </div>
      </div>
    );
  };

  const [dataFuncionalidades, setDataFuncionalidades] =
    useState(funcionalidades);
  const onToggle = (node, toggled) => {
    setCursor(node);
    node.active = true;
    if (node[0].children) {
      node[0].toggled = toggled;
      if(node[0].children.title=="Mesas")
      {
        console.log("es verdadero")
        //navigate("/ServicioMesas")
      }
      else{
        console.log("es falso")
      }
    }
     console.log(node.title)
     console.log(node)
  
    setDataFuncionalidades(Object.assign({}, dataFuncionalidades));
    setCursor(node);
  };

  return (
    <>
      <ContextMenuTrigger id="unique_identifier">
        <Treebeard
          data={dataFuncionalidades}
          onToggle={onToggle}
          style={stylesTreeBeard}
          decorators={{ ...decorators, Header }}
        />
      </ContextMenuTrigger>
    </>
  );
};
