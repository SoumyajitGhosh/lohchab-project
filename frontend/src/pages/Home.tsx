import { Button } from "@/components/ui/button";
import landingCar from "../assets/landing_car.png";
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

export default function Home() {
    return (
        <div>
            <div className="h-[63vw] w-screen home_landing_image flex flex-col items-center ">
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
                    <img className="w-[60vw]" src={landingCar} />
                </div>
            </div>
            <div className="p-10 px-20 w-screen flex gap-5">
                <Card className="w-[210px]">
                    <CardHeader>
                        <CardTitle>New Vehicles</CardTitle>
                        <CardDescription>
                            <img className="w-16 h-16" src={"/public/ic_new_vehicle.png"} />
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-[210px]">
                    <CardHeader>
                        <CardTitle>Pre-Owned Vehicles</CardTitle>
                        <CardDescription>
                            <img className="w-16 h-16" src={"/public/ic_old_vehicle.png"} />
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-[210px]">
                    <CardHeader>
                        <CardTitle>Servicing</CardTitle>
                        <CardDescription>
                            <img className="w-16 h-16" src={"/public/ic_servicing.png"} />
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-[210px]">
                    <CardHeader>
                        <CardTitle>Vehicle Scrapping</CardTitle>
                        <CardDescription>
                            <img className="w-16 h-16" src={"/public/ic_scrapping.png"} />
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-[210px]">
                    <CardHeader>
                        <CardTitle>Vehicle Insurance</CardTitle>
                        <CardDescription>
                            <img
                                className="w-16 h-16"
                                src={"/public/ic_vehicle_insurance.png"}
                            />
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
            <div className="bg-[#F9FAFA] flex flex-col justify-center items-center p-16">
                <h3 className="text-4xl plus-jakarta-sans-700">Popular Brands</h3>
                <p className="w-2/3 text-center p-4 plus-jakarta-sans-400 text-slate-600 text-xs">
                    Experience Excellence from Leading Manufacturers - From the classics
                    to the latest innovations,
                    <br />
                    Lohchab proudly offers a diverse selection of vehicles from top brands
                    around the globe.
                </p>
                <div className="flex gap-2 m-4">
                    <img
                        className="w-40 h-14 bg-white p-3 border-gray-300 border rounded-sm object-contain"
                        src="/public/mahindra.png"
                    />
                    <img
                        className="w-40 h-14 bg-white p-1 border-gray-300 border rounded-sm object-contain"
                        src="/public/honda.png"
                    />
                    <img
                        className="w-40 h-14 bg-white p-1 border-gray-300 border rounded-sm object-contain"
                        src="/public/renault.png"
                    />
                    <img
                        className="w-40 h-14 bg-white p-1 border-gray-300 border rounded-sm object-contain"
                        src="/public/mg.png"
                    />
                </div>
            </div>
            <div className="flex justify-center p-10">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-[90vw]"
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <div>
                                        <div className="flex aspect-video items-center justify-center ">

                                            <div className="flex flex-col items-center bg-[url('/public/bg_card.png')]  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">

                                                <div className="flex flex-col justify-between p-4 h-52 leading-normal rounded-s-lg bg-gradient-to-r from-[#FF4C5C] to-[#FF0F24] pr-20">
                                                    {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5> */}
                                                    <p className="mb-3 font-normal text-white text-xl plus-jakarta-sans-700">Get Best Insurance quote</p>
                                                    <Button size={"sm"} className="text-xs bg-white text-black hover:bg-gray-300 font-bold">Get Quote Now</Button>
                                                </div>
                                                <img className="object-cover w-3/6 rounded-t-lg  h-52  md:rounded-none rounded-e-lg" src="/public/card_img_1.png" alt="" />

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
        </div>
    );
}
