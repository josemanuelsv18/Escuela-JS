class AutoPause {
    constructor(){
        this.threshold = 0.25;
        this.handlerintersection = this.handlerintersection.bind(this);
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
    }
    run(player){
        this.player = player;
        const observer = new IntersectionObserver(this.handlerintersection, {
            threshold: this.threshold
        });
        observer.observe(this.player.media)
        document.addEventListener("visibilitychange", this.handlerVisibilityChange);
    }
    handlerintersection(entries){
        const entry = entries[0]
        const isVisible = entry.intersectionRatio >= this.threshold
        if(isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }
    }
    handlerVisibilityChange(){
        const isVisible = document.visibilityState === 'visible';
        if(isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }
    }
}
export default AutoPause