import { Button } from "@/components/ui/button";

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { ChevronRight, Heart, Sparkles } from "lucide-react";

import landingCar from "../assets/landing_car.png";
import card_img_1 from "../assets/card_img_1.png"
import service_hero_img from "../assets/service_hero_img.png"


import honda from "../assets/honda.png"
import mahindra from "../assets/mahindra.png"
import mg from "../assets/mg.png"
import renault from "../assets/renault.png"

import ic_new_vehicle from "../assets/ic_new_vehicle.png"
import ic_old_vehicle from "../assets/ic_old_vehicle.png"
import ic_scrapping from "../assets/ic_scrapping.png"
import ic_servicing from "../assets/ic_servicing.png"
import ic_vehicle_insurance from "../assets/ic_vehicle_insurance.png"
import ic_sell_vehicle from "../assets/ic_sell_vehicle.png"


import mahindra_xuv from "../assets/mahindra_xuv.png"
import mg_car from "../assets/mg_car.png"

import expertise from "../assets/servicesIcons/expertise.png"
import facilities from "../assets/servicesIcons/facilities.png"
import maintenance from "../assets/servicesIcons/maintenance.png"
import parts from "../assets/servicesIcons/parts.png"

import leaf from "../assets/environment/leaf.png"
import doc from "../assets/environment/Doc.png"
import energy from "../assets/environment/Energy.png"
import Nature from "../assets/environment/nature.png"

const ServiceCard = ({ title, icon }: { title: string, icon: string }) => {
    return <Card className="w-full">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
                <img className="w-16 h-16" src={icon} />
            </CardDescription>
        </CardHeader>
    </Card>
}

type Info = {
    icon: string,
    fuelType: string,
    gearType: string,
    price: string,
    condition: string
}
type ServiceInfo = {
    title: string,
    description: string,
    icon: string,
    cardStyle?: string,
    titleStyle?: string,
    imageStyle?: string,
    descriptionStyle?: string,
    textContainerStyle?: string
}
const VehicleCard = ({ title, info }: {
    title: string, info: Info
}) => {
    return (
        <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow ">
            <div className=" relative">
                <div className="absolute w-full flex p-2 justify-between">
                    {
                        info.condition === "New" ? <div className="bg-white text-xs px-4 rounded-full py-1 text-blue-500 flex justify-center items-center gap-1">New <Sparkles color="rgb(59,130,246)" size={10} /> </div> : <div></div>
                    }

                    <div className="bg-gray-400 p-1 h-7 w-7 rounded-full flex justify-center items-center">
                        <Heart className="" color="white" size={12} />
                    </div>

                </div>

                <img className="rounded-t-lg h-50" src={info.icon} alt="" />
            </div>
            <div className="p-5">
                <div className=" text-black font-semibold" >{title}</div>
                <p className=" text-gray-400 text-xs pt-2 pb-5 border-b border-slate-100">{info.fuelType} • {info.gearType}</p>
                <div className="flex justify-between pt-4">
                    <div>
                        <p className="text-xs text-gray-500 font-light">Starting from </p>
                        <p className="text-xl font-bold">₹{info.price} </p>
                    </div>
                    <Button className="mt-2 rounded-xl"><ChevronRight /></Button>
                </div>
            </div>

        </div>
    )
}

const ServiceInfoCard = ({ title, description, icon, cardStyle = "", titleStyle = "", imageStyle = "", descriptionStyle = "", textContainerStyle = "" }: ServiceInfo) => {
    return (<Card className={"w-full p-5 shadow-none " + cardStyle}>
        <CardDescription className="flex flex-row gap-5">
            <div>
                <img className={"w-28 " + imageStyle} src={icon} alt={title} />
            </div>
            <div className={"flex flex-col " + textContainerStyle}>
                <h6 className={"pb-2 text-lg text-black font-semibold " + titleStyle} > {title}</h6>
                <p className={" " + descriptionStyle}>{description}</p>
            </div>

        </CardDescription>
    </Card>)
}


const serviceInfo = [
    {
        title: "New Vehicles",
        icon: ic_new_vehicle
    },
    {
        title: "Pre-Owned Vehicles",
        icon: ic_old_vehicle
    },
    {
        title: "Servicing",
        icon: ic_servicing
    },
    {
        title: "Vehicle Scrapping",
        icon: ic_scrapping
    },
    {
        title: "Vehicle Insurance",
        icon: ic_vehicle_insurance
    },
    {
        title: "Sell Vehicle",
        icon: ic_sell_vehicle
    },

]
const vehicleInfo = [
    {
        title: "MG Motors Hector Plus",
        info: {
            icon: mg_car,
            fuelType: "Diesel",
            gearType: "Manual",
            price: "17.5 Lakh",
            condition: "New"
        }
    },
    {
        title: "Mahindra XUV 700",
        info: {
            icon: mahindra_xuv,
            fuelType: "Diesel",
            gearType: "Manual",
            price: "21 Lakh",
            condition: "New"
        }
    },
    {
        title: "MG Motors Hector Plus",
        info: {
            icon: mg_car,
            fuelType: "Diesel",
            gearType: "Manual",
            price: "12 Lakh",
            condition: "Old"
        }
    },
    {
        title: "Mahindra XUV 700",
        info: {
            icon: mahindra_xuv,
            fuelType: "Diesel",
            gearType: "Manual",
            price: "12.5 Lakh",
            condition: "Old"
        }
    },
]

const ServicesInfo = [
    {
        title: "Specialized Expertise for Supported Brands",
        description: "Lohchab provides specialized servicing for Honda 2-Wheeler, Mahindra, Renault, and MG Motors. Our certified technicians are expertly trained to handle all your maintenance needs, ensuring your vehicle runs smoothly.",
        icon: expertise,
    },
    {
        title: "Genuine Parts and Accessories",
        description: "We stock genuine parts tailored for the supporting brands vehicles. When you choose Lohchab for servicing, rest assured your vehicle receives only the highest quality components, ensuring optimal performance.",
        icon: parts,

    },
    {
        title: "State-of-the-Art Facilities",
        description: "Our service centers boast cutting-edge tools and technology for accurate and efficient servicing. From routine maintenance to complex repairs, trust us to handle all your needs with precision and care.",
        icon: facilities,

    },
    {
        title: "Personalized Maintenance Plans",
        description: "We offer personalized maintenance plans tailored to your needs and driving habits. Whether you're a daily commuter or an occasional driver, trust Lohchab to provide reliable and customized servicing solutions.",
        icon: maintenance,

    }
]

export default function Home() {
    return (
        <div>
            <div className="h-[50vh] md:h-[63vw] w-screen home_landing_image flex flex-col items-center ">
                <div>
                    <div className="text-[40px] text-center plus-jakarta-sans-800 mt-[45px]">
                        Your one stop
                        <br />
                        Vehicle Solution
                    </div>
                    <div className="flex justify-center gap-4 mt-5">
                        <Button className="text-[10px] font-semibold">
                            Buy New Vehicles
                        </Button>
                        <Button className="text-[10px] font-semibold" variant="outline">
                            Buy Pre-owned Vehicles
                        </Button>
                    </div>
                </div>
                <div className="w-full flex justify-center mt-16">
                    <img className="w-[90vw] md:w-[60vw]" src={landingCar} />
                </div>
            </div>
            <div className="w-screen flex justify-center">
                <Carousel
                    opts={{
                        align: "center",
                    }}
                    className="w-[70vw] md:w-[90vw] p-4"
                >
                    <CarouselContent>
                        {
                            serviceInfo.map((it, i) => {
                                return (
                                    <CarouselItem key={i} className="lg:basis-1/5">
                                        <ServiceCard key={i} title={it.title} icon={it.icon} />
                                    </CarouselItem>
                                )
                            })
                        }

                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>


            </div>
            <div className="bg-[#F9FAFA] flex flex-col justify-center items-center p-4 md:p-16 max-w-screen">
                <h3 className="text-4xl plus-jakarta-sans-700">Popular Brands</h3>
                <p className="w-full md:w-2/3 text-center p-4 plus-jakarta-sans-400 text-slate-600 text-xs">
                    Experience Excellence from Leading Manufacturers - From the classics
                    to the latest innovations,
                    Lohchab proudly offers a diverse selection of vehicles from top brands
                    around the globe.
                </p>
                <div className="flex gap-2 m-4 flex-col md:flex-row">
                    <img
                        className="w-full md:w-40 h-14 bg-white p-3 border-gray-300 border rounded-sm object-contain"
                        src={mahindra}
                    />
                    <img
                        className="w-full md:w-40 h-14 bg-white p-1 border-gray-300 border rounded-sm object-contain"
                        src={honda}
                    />
                    <img
                        className="w-full md:w-40 h-14 bg-white p-1 border-gray-300 border rounded-sm object-contain"
                        src={renault}
                    />
                    <img
                        className="w-full md:w-40 h-14 bg-white p-1 border-gray-300 border rounded-sm object-contain"
                        src={mg}
                    />
                </div>
            </div>
            <div className="flex justify-center p-10">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-[70vw] md:w-[90vw]"
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <div>
                                        <div className="flex aspect-video items-center justify-center ">
                                            <div className="card-background grid grid-cols-5  items-center  border border-gray-200 rounded-lg shadow   hover:bg-gray-100 ">

                                                <div className="flex flex-col col-span-3 justify-between p-4 h-44 leading-normal rounded-s-lg bg-gradient-to-r from-[#FF4C5C] to-[#FF0F24] pr-20">
                                                    <p className="mb-3 font-normal text-white text-xl plus-jakarta-sans-700">Get Best Insurance quote</p>
                                                    <Button size={"sm"} className="text-xs bg-white text-black hover:bg-gray-300 font-bold">Get Quote Now</Button>
                                                </div>
                                                <img className="object-cover w-full  col-span-2 rounded-t-lg  h-44  md:rounded-none rounded-e-lg" src={card_img_1} alt="" />

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <section className="bg-[#041125]  w-screen p-16 md:p-20 ">
                <div>
                    <h4 className="text-white text-4xl font-bold">Top Selling Vehicles</h4>
                </div>
                <div className="flex text-gray-400 mt-7 gap-10 pb-2 text-[10px] border-b border-gray-700">
                    <div>Cars/SUVs</div>
                    <div>Bikes/Scooters</div>
                    <div>Commercial Vehicles</div>
                </div>
                <div className="flex mt-5">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-[68vw] md:w-[90vw]"
                    >
                        <CarouselContent>
                            {
                                vehicleInfo.map((it, i) => {
                                    return (
                                        <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/4">
                                            <VehicleCard key={i} title={it.title} info={it.info} />
                                        </CarouselItem>
                                    )

                                })
                            }
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div className="flex flex-row-reverse pt-10">   <Button size={"lg"} className="text-xl py-7 text-black rounded-xl  bg-white hover:bg-gray-300"> View All</Button></div>
            </section>
            <section className="p-10 md:py-20 md:px-32 flex items-center flex-col ">
                <h5 className=" text-xl md:text-3xl font-semibold text-center">Book your Vehicle for Servicing ✨</h5>
                <img className="m-5 md:m-12 " src={service_hero_img} />
                <div className="grid  grid-cols-1 md:grid-cols-2 w-full gap-5">
                    {
                        ServicesInfo.map((it, i) => {
                            return <ServiceInfoCard key={i} title={it.title} icon={it.icon} description={it.description} />
                        })
                    }
                </div>
                <div className="p-5 md:p-10">
                    <Button>Book Now</Button>
                </div>
            </section>
            <section className="p-10 md:py-20 md:px-32 flex flex-col bg-[#F5FFFB]">
                <h2 className="text-4xl font-bold pb-4">Save Nature by </h2>
                <h2 className="text-4xl font-bold pb-10"> Scrapping your Vehicle</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="flex flex-col gap-5">
                        <ServiceInfoCard cardStyle=" bg-[#EBFFF7] border-[#1FFFA1] border-[1px]" title={"Environmentally Responsible Disposal"} icon={leaf} description={"Dispose of your old vehicle responsibly with Lohchab's eco-friendly scrapping services. We adhere to strict environmental standards, minimizing our impact on the planet for a cleaner future"} />
                        <ServiceInfoCard cardStyle="bg-transparent border-none" title={"Efficient and Hassle-Free Process"} icon={energy} description={"Simplify scrapping with Lohchab. Just reach out, and we'll handle everything—from pickup to paperwork. Bid farewell to your old car hassle-free, trusting Lohchab every step of the way."} />
                        <ServiceInfoCard cardStyle="bg-transparent border-none" title={"Fair and Transparent Evaluation"} icon={doc} description={"Get a fair evaluation of your vehicle's worth at Lohchab. Our experts assess its condition and offer a competitive price. Trust us for a seamless scrapping experience, ensuring you part ways confidently."} />

                    </div>
                    <div>
                        <img src={Nature} alt="nature image " />
                    </div>
                </div>
                <div className="pt-20">
                    <Button>Know More</Button>
                </div>

            </section>
        </div>
    );
}
