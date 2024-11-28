import { BsCart3 } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";
import { GrPrint } from "react-icons/gr";
import { BsQrCodeScan } from "react-icons/bs";
import { PiTelegramLogoThin } from "react-icons/pi";
import { HiOutlineShare } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";

const incentives = [
  {
    name: "MULTI COMPRAS",
    cardIcon: <BsCart3 />,
    description:
      "¡Permita que sus clientes compren cualquier cantidad de entradas para más de un evento a la vez!",
  },
  {
    name: "CÓDIGOS DE DESCUENTO",
    cardIcon: <CiDiscount1 />,
    description:
      "Aumente sus ventas creando una cantidad ilimitada de códigos de descuento disponibles para todos o solo para un tipo de boleto determinado.",
  },
  {
    name: "MÚLTIPLES EVENTOS",
    cardIcon: <IoCalendarOutline />,
    description:
      "Crea y gestiona fácilmente varios eventos a la vez. Establezca el nombre del evento, la ubicación, la fecha de inicio y estará listo para comenzar.",
  },
  {
    name: "TIPOS DE ENTRADAS ILIMITADAS",
    cardIcon: <IoTicketOutline />,
    description:
      "Cree cualquier cantidad de tipos de entradas para uno o más eventos. Establece límites de cantidad de boletos, check-ins disponibles por boleto, cantidad disponible, etc.",
  },
  {
    name: "GENERADOR DE BOLETOS",
    cardIcon: <GrPrint />,
    description:
      "El creador de tickets le permite crear tantas plantillas de tickets como necesite. De esa manera, cada tipo de entrada (Estándar, VIP, etc.) puede tener una apariencia completamente diferente.",
  },
  {
    name: "LECTOR DE QR",
    cardIcon: <BsQrCodeScan />,
    description:
      "Con un celular puedes leer los códigos de las entradas, este proceso puede mejorar considerablemente el check-in, disminuir el tiempo y hacer que la puerta de su evento esté menos concurrida.",
  },
  {
    name: "CONEXIÓN DEL CLIENTE",
    cardIcon: <PiTelegramLogoThin />,
    description:
      "Dirige correos electrónicos a tus clientes con precisión de diana. Ten a tu disposición toda la información de compra de entradas y hazla funcionar para ti a la hora de dirigirte a tus clientes.",
  },
  {
    name: "REFERIDOS",
    cardIcon: <HiOutlineShare />,
    description:
      "Aproveche el sistema de referidos que permite registrar afiliados en su sitio web para que puedan compartir su evento y obtener una parte de cada una de las entradas vendidas utilizando su enlace de referencia.",
  },
  {
    name: "PRECIOS BASADOS ​​EN ROLES",
    cardIcon: <HiOutlineUserGroup />,
    description:
      "Muestre su agradecimiento a sus usuarios leales ofreciéndoles precios diferentes a los de sus invitados habituales o ofreciéndoles diferentes niveles de precios para diferentes roles.",
  },
];

export default function Incentives() {
  return (
    <div className="ticket-features">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div className="feature-text">
          <h2 className="feature-title">
            FUNCIONES QUE FACILITARÁN LA VENTA DE TUS ENTRADAS
          </h2>
          <p className="feature-subtitle"></p>
        </div>
        <div className="mt-104 features-card">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="">
              <div className="card-icon">
                <div>{incentive.cardIcon} </div>
              </div>
              <div className="card-text">
                <h3 className="card-title">{incentive.name}</h3>
                <p className="card-subtitle">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
