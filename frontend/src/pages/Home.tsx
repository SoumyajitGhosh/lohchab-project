
import React from 'react';
import { Button } from "@/components/ui/button";
import landingCar from "../assets/landing_car.png";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



export default function Home() {
    return (
        <div>
            <div className='h-[63vw] w-screen home_landing_image flex flex-col items-center '>
                <div>
                    <div className='text-[40px] text-center plus-jakarta-sans-800 mt-[45px]'>
                        Your one stop<br />
                        Vehicle Solution
                    </div>
                    <div className='flex justify-center gap-4 mt-5'>
                        <Button className='text-[10px] font-semibold' >Buy New Vehicles</Button>
                        <Button className='text-[10px] font-semibold' variant="outline">Buy Pre-owned Vehicles</Button>
                    </div>
                </div>
                <div className='w-full flex justify-center mt-16'>
                    <img className='w-[60vw]' src={landingCar} />
                </div>


            </div>
            <div className='p-10 px-20 w-screen flex gap-5'>
                <Card className='w-[210px]'>
                    <CardHeader>
                        <CardTitle>New Vehicles</CardTitle>
                        <CardDescription>
                            <img className='w-16 h-16' src={'/public/ic_new_vehicle.png'} />
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className='w-[210px]'>
                    <CardHeader>
                        <CardTitle>Pre-Owned Vehicles</CardTitle>
                        <CardDescription>
                            <img className='w-16 h-16' src={'/public/ic_old_vehicle.png'} />
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className='w-[210px]'>
                    <CardHeader>
                        <CardTitle>Servicing</CardTitle>
                        <CardDescription>
                            <img className='w-16 h-16' src={'/public/ic_servicing.png'} />
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className='w-[210px]'>
                    <CardHeader>
                        <CardTitle>Vehicle Scrapping</CardTitle>
                        <CardDescription>
                            <img className='w-16 h-16' src={'/public/ic_scrapping.png'} />
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className='w-[210px]'>
                    <CardHeader>
                        <CardTitle>Vehicle Insurance</CardTitle>
                        <CardDescription>
                            <img className='w-16 h-16' src={'/public/ic_vehicle_insurance.png'} />
                        </CardDescription>
                    </CardHeader>
                </Card>

            </div>

        </div>

    )
}
