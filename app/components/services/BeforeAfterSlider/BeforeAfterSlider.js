"use client";

import { useEffect } from "react";
import Image from "next/image";
import Style from "./BeforeAfterSlider.module.css"; // rename to your file

export default function BeforeAfterSlider() {

    useEffect(() => {
        const imgAfter = document.querySelector(`.${Style.ImgWrapper}:nth-of-type(2)`);
        const line = document.querySelector(`.${Style.Line}`);
        const slider = document.querySelector(`.${Style.Slider}`);

        if (!imgAfter || !line || !slider) return;

        const handleInput = (e) => {
            const value = e.target.value;
            line.style.left = `${value}%`;
            imgAfter.style.clipPath = `inset(0px 0px 0px ${value}%)`;
        };

        const handleDoubleClick = () => {
            slider.value = 50;
            line.style.left = "50%";
            imgAfter.style.clipPath = "inset(0px 0px 0px 50%)";
        };

        slider.addEventListener("input", handleInput);
        slider.addEventListener("dblclick", handleDoubleClick);

        return () => {
            slider.removeEventListener("input", handleInput);
            slider.removeEventListener("dblclick", handleDoubleClick);
        };
    }, []);

    return (
        <div className={Style.ContentDiv}>
            <h2 className="pt-3">Why Invest in 3D Furniture Modeling and Rendering Services?</h2>

            <div className={Style.SliderCompare} aria-label="Before and after image slider">
                <div className={Style.ImgWrapper}>
                    <Image
                        src="/images/services/service-inner/before.webp"
                        alt="Before"
                        fill
                        sizes="100%"
                    />
                </div>

                <div className={Style.ImgWrapper}>
                    <Image
                        src="/images/services/service-inner/after.webp"
                        alt="After"
                        fill
                        sizes="100%"
                    />
                </div>

                <div className={Style.Line}></div>

                <input
                    className={Style.Slider}
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="50"
                    aria-label="Before-after image slider"
                />
            </div>
        </div>
    );
}
