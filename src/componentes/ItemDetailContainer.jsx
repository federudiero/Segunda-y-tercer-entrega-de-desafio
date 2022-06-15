import { useEffect, useState } from "react"
import React  from 'react'
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom';


let productos=[
  {

    id:"1",
    category:"notebook",
    nombre:'Notebook ASUS',
    price:'$50000',
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/KENC231A/1000x1000-KENC231A.jpg&w=500&q=100',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
    
  },
  
  {

    id:"2",
    category:"notebook",
   
    category:`Celulares`,
    nombre:'Notebook ASUS VivoBook',

    price:'$40000' ,
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } ,
  
  {

    id:"3",
    category:"notebook",
    nombre:'Notebook ASUS VivoBook2',
    price:'$60000',
    description:"otebook Asus VivoBook X513EA negra 15.6, Intel Core i7 1165G7 16GB de RAM 512GB SSD, Intel Iris Xe Graphics G7 96EUs 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_671953-MLA48632493165_122021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } ,
  {

    id:"4",
    category:"notebook",
    nombre:'Notebook Gamer AORUS',
    price:'$340.000' ,
    description:"Notebook Gamer AORUS KD 15.6 Core I7 11800H 16GB (2x8GB) 512GB SSD NVMe RTX 3060 240Hz W11 ",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30650_Notebook_Gamer_AORUS_KD_15.6__Core_I7_11800H_16GB__2x8GB__512GB_SSD_NVMe_RTX_3060_240Hz_W11_02c902ce-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } ,
  {

    id:"5",
    category:"notebook",
    nombre:'Notebook Lenovo',
    price:'$ 62.830' ,
    description:"Notebook Lenovo 14 AMD Pro A4 4350B 4GB 500GB Freedos",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24158_Notebook_Lenovo_14__AMD_Pro_A4_4350B_4GB_500GB_Freedos_28a58e50-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
    
  } ,
  {

    id:"6",
    category:"notebook",
    nombre:'Notebook ASUS ROG ZEPHYRUS',
    price:'$ 350.000' ,
    description:"Notebook ASUS ROG ZEPHYRUS 14 WQHD RYZEN 9 4900HS 16GB 1TB SSD NVMe RTX 2060",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26535_Notebook_ASUS_ROG_ZEPHYRUS_14__WQHD_RYZEN_9_4900HS_16GB_1TB_SSD_NVMe_RTX_2060_b8ffd6ee-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } ,
  {

    id:"7",
    category:"notebook",
    nombre:'Notebook Lenovo V15',
    price:'$ 117.200' ,
    description:"Notebook Lenovo V15 15.6 Core I5 1135G7 8GB 1TB HDD Freedos ",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29935_Notebook_Lenovo_V15_15.6__Core_I5_1135G7_8GB_1TB_HDD_Freedos_71103a44-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } ,
  {

    id:"8",
    category:"notebook",
    nombre:'Notebook Gamer AORUS ',
    price:'$ 385.000' ,
    description:"Notebook Gamer AORUS XD 15.6 Core I7 11800H 16GB (2x8GB) 1TB SSD NVMe RTX 3070 240Hz W11 Home",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30646_Notebook_Gamer_AORUS_XD_15.6__Core_I7_11800H_16GB__2x8GB__1TB_SSD_NVMe_RTX_3070_240Hz_W11_Home_40f94c0d-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } ,
  {

    id:"9",
    category:"notebook",
    nombre:'Notebook Gamer XPG',
    price:'$ 357.000' ,
    description:"5 fotos Notebook Gamer XPG XENIA 15.6 Core I7 11800H 32GB (2x16GB) 1TB SSD NVMe RTX 3070 165Hz W10",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30001_Notebook_Gamer_XPG_XENIA_15.6__Core_I7_11800H_32GB__2x16GB__1TB_SSD_NVMe_RTX_3070_165Hz_W10_2f82564b-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } ,
  {

    id:"10",
    category:"notebook",
    nombre:'Notebook HP G8 240',
    price:'55.890' ,
    description:"Notebook HP G8 240 14 Celeron N4020 4GB 500GB HDD W10",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30345_Notebook_HP_G8_240_14__Celeron_N4020_4GB_500GB_HDD_W10_64d30805-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } ,
  {

    id:"11",
    category:"notebook",
    nombre:'Notebook ASUS UX5401',
    price:'$ 200.000' ,
    description:"Notebook ASUS UX5401 14 Core I5 1135G7 8GB 512GB SSD OLED W10",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30592_Notebook_ASUS_UX5401_14__Core_I5_1135G7_8GB_512GB_SSD_OLED_W10_f059b8fd-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } ,
  {

    id:"12",
    category:"notebook",
    nombre:'Notebook ASUS ZenBook DUO TOUCH',
    price:'$300000' ,
    description:"Notebook ASUS ZenBook DUO TOUCH UX482 14  Core I7 1165G7 16GB 1TB SSD NVMe MX450 Screen Pad PLUS 12.65" ,
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30572_Notebook_ASUS_ZenBook_DUO_TOUCH_UX482_14__Core_I7_1165G7_16GB_1TB_SSD_NVMe_MX450_Screen_Pad_PLUS_12.65__W10_edf29905-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } ,
  {

    id:"13",
    category:"notebook",
    nombre:'Notebook ASUS ZenBook',
    price:'$ 177.780' ,
    description:"Notebook ASUS ZenBook UX425 14 Core I5 1135G7 8GB 512GB SSD W10",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30529_Notebook_ASUS_ZenBook_UX425_14__Core_I5_1135G7_8GB_512GB_SSD_W10_68211288-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } ,
  {

    id:"14",
    category:"notebook",
    nombre:'Notebook Gamer ASUS ROG ZEPHYRUS',
    price:'$275000' ,
    description:"Notebook Gamer ASUS ROG ZEPHYRUS G14 14 Ryzen 7 5800HS 16GB (2x8GB) 512GB SSD RTX 3050 144Hz W10",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30570_Notebook_Gamer_ASUS_ROG_ZEPHYRUS_G14_14__Ryzen_7_5800HS_16GB__2x8GB__512GB_SSD_RTX_3050_144Hz_W10_2d7b6e2b-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } ,
  {

    id:"15",
    category:"notebook",
    nombre:'Notebook Gamer Acer NITRO',
    price:'$270000' ,
    description:"Notebook Gamer Acer NITRO 5 15.6  Core I5 10300H 8GB 1TB HDD GTX1650 W11 Home",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31309_Notebook_Gamer_Acer_NITRO_5_15.6__Core_I5_10300H_8GB_1TB_HDD_GTX1650_W11_Home_b12c2cc8-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } ,
  {

    id:"16",
    category:"notebook",
    nombre:'Notebook Gamer ASUS ROG ZEPHYRUS',
    price:'$ 281.000' ,
    description:"Notebook Gamer ASUS ROG ZEPHYRUS G14 14 Ryzen 7 5800HS 16GB (2x8GB) 512GB SSD RTX 3050 144Hz W10 ANIME MATRIX",
    pictureURL:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30568_Notebook_Gamer_ASUS_ROG_ZEPHYRUS_G14_14__Ryzen_7_5800HS_16GB__2x8GB__512GB_SSD_RTX_3050_144Hz_W10_ANIME_MATRIX_5d444937-grn.jpg',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } ,
  {

    id:"17",
    category:"celulares" ,
    nombre:'Samsung Galaxy S22 Ultra 12gb 256gb Green',
    price:'$209.999' ,
    description:"Dispositivo liberado para que elijas la compañía telefónica que prefieras, Pantalla Dynamic AMOLED 2X de 6.8,Cámara delantera de 40Mpx.,Batería de 5000mAh ,Memoria interna de 256GB ,Tarjeta eSIM incluida.",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } ,
  {

    id:"18",
    category:"celulares" ,
    nombre:'Motorola Edge 20 Lite 128 GB gris 6 GB RAM',
    price:'$72.999' ,
    description:"Dispositivo liberado para que elijas la compañía telefónica que prefieras, Pantalla Dynamic AMOLED 2X de 6.8,Cámara delantera de 40Mpx.,Batería de 5000mAh ,Memoria interna de 256GB ,Tarjeta eSIM incluida.Compatible con redes 5G.Pantalla OLED de 6.7,Pantalla OLED de 6.7.Cámara delantera de 32Mpx.Procesador MediaTek Dimensity 720 Octa-Core de 2GHz con 6GB de RAM",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_833619-MLA48233725917_112021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } ,
  {

    id:"19",
    category:"celulares" ,
    nombre:'Moto G60s 128 GB azul 6 GB RAM',
    price:'$54.999' ,
    description:"Dispositivo liberado para que elijas la compañía telefónica que prefieras.Pantalla IPS de 6.8.Tiene 4 cámaras traseras de 64Mpx/8Mpx/5Mpx/2Mpx.Cámara delantera de 16Mpx.Procesador MediaTek MT6382 Helio G95 Octa-Core de 2.05GHz con 6GB de RAM.Batería de 5000mAh.Memoria interna de 128GB.Resistente a las salpicaduras.Con reconocimiento facial y sensor de huella dactilar.Resistente al polvo.",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_788340-MLA48112659213_112021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } ,
  {

    id:"20",
    category:"celulares" ,
    nombre:'Samsung Galaxy S20 FE 5G 128 GB cloud navy 6 GB RAM' ,
    price:'$89.999' ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } 
  ,
  {

    id:"21",
    category:"celulares" ,
    nombre:'Samsung Galaxy S21 Fe Gris Oscuro 5g' ,
    price:'$104.999' ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_730981-MLA48800008115_012022-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } 
  ,
  {

    id:"22",
    category:"celulares" ,
    nombre:'Samsung Galaxy A52 128 GB awesome white 6 GB RAM' ,
    price:'$75.999' ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_655998-MLA49203110816_022022-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } 
  ,
  {

    id:"23",
    category:"celulares" ,
    nombre:'Xiaomi Redmi 9A Dual SIM 32 GB gris granito 2 GB RAM'   ,
    price:'$28.226' ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_981867-MLA48770610134_012022-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } 
  ,
  {

    id:"24",
    category:"celulares" ,
    nombre:'Samsung Galaxy Z Flip3 5G 128 GB cream 8 GB RAM ' ,
    price:'$118.999' ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_740721-MLA47886660486_102021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } 
  ,
  {

    id:"25",
    category:"celulares" ,
    nombre:'Moto G71 128 GB neptune green 6 GB RAM ' ,
    price:'$62.299' ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_867710-MLA49272373785_032022-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } 
  ,
  {

    id:"26",
    category:"celulares" ,
    nombre:'Motorola Edge 20 Pro 256 GB blanco optic 12 GB RAM ' ,
    price:'$119.999' ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_625169-MLA48113209394_112021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } 
  ,
  {

    id:"27",
    category:"celulares" ,
    nombre:'Samsung Galaxy S20 FE 5G 128 GB cloud navy 6 GB RAM' ,
    price:'$45.999' ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_863356-MLA48697556226_122021-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } 
  ,
  {

    id:"28",
    category:"celulares" ,
    nombre:'Moto G41 128 GB negro ónix 4 GB RAM  ' ,
    price:'$44.999' ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_711274-MLA49535290493_032022-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } 
  ,
  {

    id:"29",
    category:"celulares" ,
    nombre:'Moto G41 128 GB negro ónix 4 GB RAM ' ,
    price:'$44.999' ,
    description:`
    Dispositivo liberado para que elijas la compañía telefónica que prefieras
    Compatible con redes 5G.
    Pantalla Dynamic AMOLED de 6.5".
    Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.
    Cámara delantera de 32Mpx.
    Procesador Snapdragon 865 Octa-Core de 2.84GHz con 6GB de RAM.
    Batería de 4500mAh con carga inalámbrica.
    Memoria interna de 128GB.
    Resistente al agua.
   Con reconocimiento facial y sensor de huella dactilar.`,
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_997241-MLA49460481867_032022-F.webp',
     pictureURL2:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    pictureURL3:'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    
  } 
  
  


   ]
function ItemDetailContainer() {
   
    const [productoDetail , setProductoDetail] =useState([]);
    const {id} =useParams();
       
    useEffect(() => {
 
          
   
            const computadora= new Promise((res,rej)=>{
              setTimeout(()=>
              {(!id)? res(productos) : res(productos.find(item=>item.id==id))
              },2000)
            })
            computadora
            .then((res)=>{
                setProductoDetail(res)
            })
        
          
            .catch((error)=>{
              console.error("error",error)
            })
        
            .finally(()=>{
        
            })
            
          }, [id])
      
          console.log(productoDetail) 
       
           
            


        

  return (
    <div>
       
        
      <ItemDetail productoDetail={productoDetail}/>
        
    </div>
  )
}

export default ItemDetailContainer