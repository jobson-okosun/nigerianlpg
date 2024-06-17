import { Component, inject, OnInit, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    standalone: true,
    selector: 'page-hero',
    template: `
        <div class="animate__animated animate__fadeIn bg-center bg-no-repeat bg-cover bg-fixed" [style.backgroundImage]="'url(/assets/lpg.jpg)'">
            <div class="flex items-center justify-center relative bg-secondary bg-opacity-60 min-h-72 ">
                <div class="-mb-20 py-5 ">
                    <h1 class="font-black text-3xl xl:text-5xl text-white animate__animated animate__slideInUp">{{ data()?.title }} </h1>
                    <div class="flex items-center mt-2">
                        <span class="z-10 rounded-full h-3 w-3 bg-black border-2 border-gray-300"></span>
                        <span class="h-[2px] bg-gray-300 w-16"></span>
                    </div>
                </div>
            </div>
        </div>
    `
})

export default class PageHeroComponent implements OnInit { 
    private route = inject(ActivatedRoute)
    data = signal<any>(null) 

    ngOnInit(): void {
        this.route.data.subscribe((data) => {
            this.data.set(data)
        })
    }
}