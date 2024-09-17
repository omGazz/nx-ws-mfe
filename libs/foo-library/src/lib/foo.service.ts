import { computed, Injectable, signal } from '@angular/core';

/**
 * IMPORTANT: This service to be a singleton can be injected in multiple places (shell and mfe)
 * but must provided only one time, usually in the shell.
 */
@Injectable({
  providedIn: 'root'
})
export class FooService {

  public fooData = signal<string>('Silicon Valley Characters');
  public fooDataSignal = computed(() => this.fooData());

  setData(data: string): void {
    this.fooData.set(data);
  }
}
