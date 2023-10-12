import { Component, Input, OnDestroy } from '@angular/core';
import { InfiniteScrollProps } from '../models';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
})
export class InfiniteScrollComponent implements OnDestroy {
  @Input() props: InfiniteScrollProps = {
    threshold: '25%',
    position: 'bottom',
    loadingSpinner: 'bubbles',
    loadingText: 'Cargando más datos...',
    currentPage: 1,
    getDatas: function (currentPage: number): void {
      throw new Error(
        'Error: No se ha implementado una función en el infinity scroll'
      );
    },
  };
  private completeInfinityScroll: any;

  ngOnDestroy(): void {
    clearTimeout(this.completeInfinityScroll);
  }

  public loadDatas(event: any) {
    if (this.props.currentPage === this.props.totalPages) {
      event.target.complete();
      return;
    }
    this.props.currentPage = this.props.currentPage + 1;
    this.props.getDatas(this.props.currentPage);

    this.completeInfinityScroll = setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
}
