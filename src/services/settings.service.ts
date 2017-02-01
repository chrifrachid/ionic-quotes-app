export class SettingsService {
	private useAlternativeBackground: boolean = false;

	setBackground(isAlt: boolean) {
		this.useAlternativeBackground = isAlt;
	}

	isAlternativeBackground(): boolean {
		return this.useAlternativeBackground;
	}
}