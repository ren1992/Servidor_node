export const stylesTreeBeard = {
  tree: {
    base: {
      listStyle: "none",
      backgroundColor: "rgb(15, 15, 15)",
      marginLeft: -119,
      marginTop: "1rem",
      width:"20rem",
      padding: 10,
      //color: "rgb(198, 192, 192)",
      fontFamily: "'PT Sans', sans-serif",
      fontSize: "18px",
      margin: 2,
      whiteSpace:'nowrap',
      overflow:'hidden',
      textOverflow:'ellipsis',
    },
    node: {
        base: {
            position: 'relative',
            marginLeft: '25px',
        },
        link: {
            cursor: 'pointer',
            position: 'relative',
            padding: '0px 5px',
            display: 'block',
           
        },
        activeLink: {
           //background: 'black',
            color: 'orange'
        },
  

        toggle: {
            base: {
                position: 'relative',
                display: 'inline-block',
                verticalAlign: 'top',
                marginLeft: '-10px',
                height: '24px',
                width: '24px',
                
            },
            wrapper: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                margin: '-7px 0 0 -7px',
                height: '14px',
                marginLeft: '-7px',
            },
            height: 14,
            width: 14,
            arrow: {
                fill: '#9DA5AB',
                strokeWidth: 0
            }
        },
        header: {
            base: {
                display: 'inline-block',
                verticalAlign: 'top',
                marginLeft: '5px',
                // color: '#9DA5AB'
            },
            connector: {
                width: '2px',
                height: '12px',
                borderLeft: 'solid 2px black',
                borderBottom: 'solid 2px black',
                position: 'absolute',
                top: '0px',
                left: '-21px'
            },
            title: {
                lineHeight: '24px',
                verticalAlign: 'middle'
            }
        },
        subtree: {
            listStyle: 'none',
            paddingLeft: '19px'
        },
        loading: {
            color: '#E2C089'
        }
    }
}
}


export const stylesTreeBeardUsuarios = {
  tree: {
    base: {
      listStyle: "none",
      backgroundColor: "#d8dfe4",
      borderRadius: "20px",
      marginLeft: -0,
      padding: 10,
      color: "#666668",
      fontFamily: "lucida grande ,tahoma,verdana,arial,sans-serif",
      fontSize: "15px",
      margin: 6,
      whiteSpace:'nowrap',
      overflow:'hidden',
      textOverflow:'ellipsis',
      width:'15rem'
    },
    node: {
        base: {
            position: 'relative'
        },
        link: {
            cursor: 'pointer',
            position: 'relative',
            padding: '0px 5px',
            display: 'block'
        },
        activeLink: {
             background: '#31363F',
           // color: 'orange'
        },
  

        toggle: {
            base: {
                position: 'relative',
                display: 'inline-block',
                verticalAlign: 'top',
                marginLeft: '-5px',
                height: '24px',
                width: '24px'
            },
            wrapper: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                margin: '-7px 0 0 -7px',
                height: '14px'
            },
            height: 14,
            width: 14,
            arrow: {
                fill: '#9DA5AB',
                strokeWidth: 0
            }
        },
        header: {
            base: {
                display: 'inline-block',
                verticalAlign: 'top',
                // color: '#9DA5AB'
            },
            connector: {
                width: '2px',
                height: '12px',
                borderLeft: 'solid 2px black',
                borderBottom: 'solid 2px black',
                position: 'absolute',
                top: '0px',
                left: '-21px'
            },
            title: {
                lineHeight: '24px',
                verticalAlign: 'middle'
            }
        },
        subtree: {
            listStyle: 'none',
            paddingLeft: '19px'
        },
        loading: {
            color: '#E2C089'
        }
    }
}
};
