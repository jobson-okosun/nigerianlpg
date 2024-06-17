import { timer } from "rxjs";

export const initSwiper = (config?:any) => {
    const swiperEl = document.querySelector('swiper-container')!;
    const swiperParams = config ?? {
        slidesPerView: 1,
        loop: true,
        pagination: true,
        autoplay: {
            delay: 5000,
        },
        on: {
            init() { },
        },
    };
    
    timer(0).subscribe(() => {
        Object.assign(swiperEl, swiperParams);
        swiperEl.initialize()
    }) 
}

export const swiperSlideNext = () => {
    const swiperEl = document.querySelector('swiper-container');
    swiperEl?.swiper.slideNext();
}

export const swiperPreviousNext = () => {
    const swiperEl = document.querySelector('swiper-container');
    swiperEl?.swiper.slidePrev();
}

export const initMarquee = (selector: string, speed: number, datasourceLength: number) => {

    const parentSelector = document.querySelector(selector) as HTMLElement;
    const firstElement = parentSelector.firstElementChild as HTMLElement;
    let i = 0;
    let animationFrameId: number;

    function handleResize() {
      const cloneWidth = parentSelector.clientWidth;
      parentSelector.style.width = cloneWidth * 3 + 'px';
    }

    function animate() {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth * (datasourceLength / 2)) {
        i = 0;
      }
      i = i + speed;
      animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', handleResize);

    handleResize();
    parentSelector.insertAdjacentHTML('beforeend', parentSelector.innerHTML);
    parentSelector.insertAdjacentHTML('beforeend', parentSelector.innerHTML);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }


  export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }