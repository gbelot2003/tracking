<div class="" v-if="totalPage > 1">
	<ul class="pagination">

		<li v-class="disabled: currentPage == 0 ">
			<a href="#!" aria-label="Previous" v-on="click: setPage(0)">
				<i class="icon">&laquo</i>
			</a>
		</li>

		<li v-repeat="
				pageNumber: totalPage | limit 10
				"
		    v-class="
				active: currentPage == pageNumber,
				waves-effect: currentPage ! = pageNumber,
				blue: currentPage == pageNumber"
				>
			<a href="#!"  v-on="click: setPage(pageNumber)">@{{ pageNumber + 1 }}</a>
		</li>

		<li v-class="disabled: currentPage === totalPage-1">
			<a href="#!" aria-label="Next" v-on="click: setPage(totalPage - 1)">
				<span class="icon">&raquo;</span>
			</a>
		</li>
	</ul>
</div>