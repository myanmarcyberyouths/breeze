"use client";
import { eventCategories } from "@/data/eventCategories";
import CelebrateIcon from "@/icons/CelebrateIcon";
import MyanmarFlagIcon from "@/icons/MyanmarFlagIcon";
import SearchIcon from "@/icons/SearchIcon";
import React, { useEffect, useRef } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import EventCategory from "./EventCategory";
import useIntersecionObserver from "@/customHooks/useIntersectionObsever";
import { useIntersector } from "@/context/interSectorContext";

const HeroSection = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const { observeElement } = useIntersector();
  const isIntersecting = useIntersecionObserver(heroSectionRef);
  useEffect(() => {
    observeElement(isIntersecting);
  }, [isIntersecting]);
  return (
    <section ref={heroSectionRef}>
      <div className="mt-20 grid grid-cols-2 gap-28 pb-64 md:mt-10">
        <div className="col-span-full text-center lg:col-span-1">
          <div className="mb-16">
            <div className="mb-4 flex items-center justify-center gap-2">
              <SearchIcon />
              <h3 className="text-3xl font-bold">Find events</h3>
            </div>
            <h3 className="mb-4 text-3xl font-bold">or</h3>
            <div className="mb-4 flex items-center justify-center gap-2">
              <CelebrateIcon />
              <h3 className="text-3xl font-bold">Create events</h3>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="mb-4 text-3xl font-bold">
              Get your account in 3 mins !
            </h3>
            <p className="mb-4">Only in 3 mins. For Real. No Cap.</p>
          </div>
          <div className="relative mb-4">
            <a
              href="#"
              className="block w-full rounded-md bg-primary py-3 text-center text-neutral-1"
            >
              <div className="flex items-center justify-center gap-4 text-sm">
                <MdOutlineFileDownload size={20} />
                <p>Download App</p>
              </div>
            </a>
            <div className="absolute -right-6 -top-3 rounded-full bg-green-6 px-2 py-1">
              <p className="text-xs uppercase text-neutral-1">100% free</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MyanmarFlagIcon />
            <p className="font-semibold">Proudly Made in Myanmar.</p>
          </div>
        </div>
        <div className="col-span-full grid grid-cols-3 gap-y-6 lg:col-span-1">
          {eventCategories.map((eventCategory: EventCategoryInterface) => {
            return (
              <EventCategory
                key={eventCategory?.id}
                eventCategory={eventCategory}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
