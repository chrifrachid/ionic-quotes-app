import { Quote } from "../data/quote.interface";

export class QuotesService {
	private favoriteQuotes: Quote[] = [];

	addQuoteToFavorite(quote: Quote) {
		this.favoriteQuotes.push(quote);
	}

	removeQuoteFromFavorite(quote: Quote) {
		const quoteIndex = this.favoriteQuotes.findIndex((currentQuote: Quote) => {
			return currentQuote.id == quote.id;
		});
		this.favoriteQuotes.splice(quoteIndex, 1);
	}

	getFavoriteQuotes(): Quote[] {
		return this.favoriteQuotes.slice(); // Pass by copy
	}
}