import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: true
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): any {
    if (!value) {
      return value;
    }

    // Sanitizar el HTML utilizando el método `bypassSecurityTrustHtml`
    // **Importante:** Este método permite ejecutar código HTML arbitrario.
    // Asegúrate de que la cadena de texto proviene de una fuente confiable.
    return this.sanitizer.sanitize(SecurityContext.HTML, value);
  }
}
