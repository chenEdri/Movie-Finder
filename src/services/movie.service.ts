import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class movieService {
  constructor(private http: HttpClient) {}

  async getMovies(searchBy: any): Promise<any> {
    const filter = this.arrangeFilter(searchBy);
    try {
      let res = await this.http.get<any>(
        `http://www.omdbapi.com/?${filter}&apikey=f7129c48`
      );
      return res;
    } catch (error) {
      console.log(`couldn't GET respons from the API with data: ${filter}`);
      console.dir(error);
      throw error;
    }
  }

  private arrangeFilter(searchBy: any) {
    let fileter = '';
    if (searchBy.title.length) fileter += `s=${searchBy.title}`;
    if (searchBy.year.length) fileter += `&y=${searchBy.year}`;
    if (searchBy.plot.length) fileter += `&plot=${searchBy.plot}`;
    if (searchBy.type.length) fileter += `&type=${searchBy.type}`;
    return fileter;
  }

  async getById(id: String): Promise<any> {
    return await this.http.get<any>(
      `http://www.omdbapi.com/?i=${id}&apikey=f7129c48`
    );
  }
}
