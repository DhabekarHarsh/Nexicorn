import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

function PaymentGateway() {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 class="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            Integrated Payment Gateways
          </h2>

          <p class="block max-w-4xl mt-4 text-gray-500 dark:text-gray-300">
            Hurry up! 14+ Payment gateways are integrated. Buy now and get all
            these plugins included free with the QuickJob best job board php
            script.
          </p>

          <div class="mt-6 mx-24">
            <Splide
              options={{
                perPage: 8,
                perMove: 1,
                padding: { left: 10, right: 10, top: 10, bottom: 10 },
              }}
              aria-label="My Favorite Images"
            >
              <SplideSlide className="flex justify-center items-center mr-4">
                <div className="w-100 h-100 shadow-md flex justify-center items-center">
                  <img
                    src="https://bylancer.com/demo/quickjob/img/payment/1.png"
                    className="max-w-full max-h-full p-4"
                    alt="Image 1"
                  />
                </div>
              </SplideSlide>

              <SplideSlide className="flex justify-center items-center">
                <div className="w-100 h-100 shadow-md flex justify-center items-center">
                  <img
                    src="https://bylancer.com/demo/quickjob/img/payment/2.png"
                    className="p-4"
                    alt="Image 2"
                  />
                </div>
              </SplideSlide>

              <SplideSlide className="flex justify-center items-center">
                <div className="w-100 h-100 shadow-md flex justify-center items-center">
                  <img
                    src="https://bylancer.com/demo/quickjob/img/payment/3.png"
                    className="p-4"
                    alt="Image 3"
                  />
                </div>
              </SplideSlide>

              <SplideSlide className="flex justify-center items-center">
                <div className="w-100 h-100 shadow-md flex justify-center items-center">
                  <img
                    src="https://bylancer.com/demo/quickjob/img/payment/4.png"
                    className="p-4"
                    alt="Image 4"
                  />
                </div>
              </SplideSlide>

              <SplideSlide className="flex justify-center items-center">
                <div className="w-100 h-100 shadow-md flex justify-center items-center">
                  <img
                    src="https://bylancer.com/demo/quickjob/img/payment/5.png"
                    className="p-4"
                    alt="Image 2"
                  />
                </div>
              </SplideSlide>

              <SplideSlide className="flex justify-center items-center">
                <div className="w-100 h-100 shadow-md flex justify-center items-center">
                  <img
                    src="https://bylancer.com/demo/quickjob/img/payment/6.png"
                    className="p-4"
                    alt="Image 2"
                  />
                </div>
              </SplideSlide>

              <SplideSlide className="flex justify-center items-center">
                <div className="w-100 h-100 shadow-md flex justify-center items-center">
                  <img
                    src="https://bylancer.com/demo/quickjob/img/payment/7.png"
                    className="p-4"
                    alt="Image 2"
                  />
                </div>
              </SplideSlide>

              <SplideSlide className="flex justify-center items-center">
                <div className="w-100 h-100 shadow-md flex justify-center items-center">
                  <img
                    src="https://bylancer.com/demo/quickjob/img/payment/8.png"
                    className="p-4"
                    alt="Image 2"
                  />
                </div>
              </SplideSlide>

              <SplideSlide className="flex justify-center items-center">
                <div className="w-100 h-100 shadow-md flex justify-center items-center">
                  <img
                    src="https://bylancer.com/demo/quickjob/img/payment/9.png"
                    className="p-4"
                    alt="Image 2"
                  />
                </div>
              </SplideSlide>

              <SplideSlide className="flex justify-center items-center">
                <div className="w-100 h-100 shadow-md flex justify-center items-center">
                  <img
                    src="https://bylancer.com/demo/quickjob/img/payment/10.png"
                    className="p-4"
                    alt="Image 2"
                  />
                </div>
              </SplideSlide>

              <SplideSlide className="flex justify-center items-center">
                <div className="w-100 h-100 shadow-md flex justify-center items-center">
                  <img
                    src="https://bylancer.com/demo/quickjob/img/payment/11.png"
                    className="p-4"
                    alt="Image 2"
                  />
                </div>
              </SplideSlide>

              <SplideSlide className="flex justify-center items-center">
                <div className="w-100 h-100 shadow-md flex justify-center items-center">
                  <img
                    src="https://bylancer.com/demo/quickjob/img/payment/12.png"
                    className="p-4"
                    alt="Image 2"
                  />
                </div>
              </SplideSlide>

              <SplideSlide className="flex justify-center items-center">
                <div className="w-100 h-100 shadow-md flex justify-center items-center">
                  <img
                    src="https://bylancer.com/demo/quickjob/img/payment/13.png"
                    className="p-4"
                    alt="Image 2"
                  />
                </div>
              </SplideSlide>

              <SplideSlide className="flex justify-center items-center">
                <div className="w-100 h-100 shadow-md flex justify-center items-center">
                  <img
                    src="https://bylancer.com/demo/quickjob/img/payment/14.png"
                    className="p-4"
                    alt="Image 2"
                  />
                </div>
              </SplideSlide>

            </Splide>
          </div>
        </div>
      </section>
    </>
  );
}

export default PaymentGateway;
