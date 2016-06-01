import * as React from "react";
import * as classNames from "classnames";
import Icon from "../icon/Icon";
const KEYCODE = {
	ZERO: 48,
	NINE: 57,

	NUMPAD_ZERO: 96,
	NUMPAD_NINE: 105,

	BACKSPACE: 8,
	DELETE: 46,
	ENTER: 13,

	ARROW_UP: 38,
	ARROW_DOWN: 40,
}
/**-分页-**/
export default class Pagination extends React.Component<any,any> {
	pages: number;
	static defaultProps = {
        defaultCurrent: 1,
        total:500,
        defaultPageSize:10
    }

    constructor(props){
        super(props);
		/**
		 * 总条数除以页面需要展现的数目 得到页数
		 */
		 
	     this.state = {
			   defaultCurrent: this.props.defaultCurrent,
			   total: this.props.total,
			   defaultPageSize: this.props.defaultPageSize,
			   _current: this.props.current
	       }
		 this.jumpNext = this.jumpNext.bind(this);
		 this.jumpPrev = this.jumpPrev.bind(this);
		 this.handleKeyDown = this.handleKeyDown.bind(this);
		 this.handleKeyUp = this.handleKeyUp.bind(this);
    }


    handlePagesClick(page) {
    	this.setState({
			defaultCurrent:page
    	})
		if (this.props.onChange) {
            this.props.onChange(page);
        }

       
    }

    handlePrevClick(event, pages) {
		this.setState((state) => {
			if (state.defaultCurrent == 1) {
				return false;
			}
			if (this.props.onChange) {
				this.props.onChange(this.state.defaultCurrent - 1);
			}
            return { defaultCurrent: state.defaultCurrent - 1 };
        });
       
    }

    handleNextClick(pages) {
		this.setState((state) => {
			if (state.defaultCurrent == pages){
				return false;
			}
			if (this.props.onChange) {
				this.props.onChange(this.state.defaultCurrent + 1);
			}
            return { defaultCurrent: state.defaultCurrent + 1 };
        });

    }

	jumpPrev() {
		this.handlePagesClick(Math.max(1, this.state.defaultCurrent - 5));
	}

	jumpNext() {
		let calcPage = Math.floor((this.props.total - 1) / 10) + 1;
		this.handlePagesClick(Math.min(calcPage, this.state.defaultCurrent + 5));
	}

	handleGo(){
		if (this.state._current) {
			this.handlePagesClick(this.state._current);
		}
		
	}

    createItem(allPages):any {
		let pagerList = [];
		let jumpPrev = null;
		let jumpNext = null;
		let firstPager = null;
		let lastPager = null;
		let current = this.state.defaultCurrent;
		if (allPages <= 9) {
			for (let i = 1; i < allPages+1; i++) {
				let Li = (<li key = {i} onClick={(event) => this.handlePagesClick(i) }
					className= {current == i ? 'on' : ''}>{i}</li>);
				pagerList.push(Li);
			}
		}else{
			/**
			 * 处理分页大于9页的方法函数
			 */
			jumpPrev = (<li key="prev" className="page-prev" onClick={this.jumpPrev}><Icon type="ellipsis" /></li>);
			jumpNext = (<li key="next" className="page-next" onClick={this.jumpNext}><Icon type="ellipsis" /></li>);
			lastPager = (<li key="last" onClick={(event) => this.handlePagesClick(allPages)}>{allPages}</li>);
			firstPager = (<li key={1} onClick={(event) => this.handlePagesClick(1)}>1</li>);
			let left = Math.max(1, current - 2);
			let right = Math.min(current + 2, allPages);
			if (current - 1 <= 2) {
				right = 1 + 4;
			}

			if (allPages - current <= 2) {
				left = allPages - 4;
			}
			for (let i = left; i <= right; i++) {
				let Li = (<li key = {i} onClick={(event) => this.handlePagesClick(i) }
					className= {current == i ? 'on' : ''}>{i}</li>);
				pagerList.push(Li);
			}

			if (current - 1 >= 4) {
				pagerList.unshift(jumpPrev);
			}
			if (allPages - current >= 4) {
				pagerList.push(jumpNext);
			}
			if (left !== 1) {
				pagerList.unshift(firstPager);
			}
			if (right !== allPages) {
				pagerList.push(lastPager);
			}
		}
		return pagerList;
    }

    handleKeyDown(evt) {
		
		if (evt.keyCode === KEYCODE.ARROW_UP || evt.keyCode === KEYCODE.ARROW_DOWN) {
			evt.preventDefault();
		}
	}

	handleKeyUp(evt) {
		
		const _val = evt.target.value;
		let val;

		if (_val === '') {
			val = _val;
		} else if (isNaN(Number(_val))) {
			val = this.state._current;
		} else {
			val = Number(_val);
		}

		this.setState({
			_current: val,
		});

		if (evt.keyCode === KEYCODE.ENTER) {
			this.handlePagesClick(val);
		} else if (evt.keyCode === KEYCODE.ARROW_UP) {
			this.handlePagesClick(val - 1);
		} else if (evt.keyCode === KEYCODE.ARROW_DOWN) {
			this.handlePagesClick(val + 1);
		}
	}

	showQuickJumper(){
		return <div>
			跳至
			<input type="text" value={this.state._current} onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp} onChange={this.handleKeyUp} />
			<button onClick= {this.handleGo.bind(this) }>Go</button>
		</div>
	}

    render() {
		let allPages = Math.ceil(this.props.total / this.props.defaultPageSize);
        return (<div className="cwgj-pagination">
					<ul className="pagination-list cwgj-clearfix">
						<li 
						className = {this.state.defaultCurrent < 2 ? 'off' : ''}
						onClick={(event) => this.handlePrevClick(event, allPages) }>
							<Icon type="left"/>
						</li>
						{this.createItem(allPages) }
						<li 
					className = {this.state.defaultCurrent == allPages ? 'off' : ''}
					onClick={(event) => this.handleNextClick(allPages) }>
							<Icon type="right"/>
						</li>
						{this.props.showQuickJumper ? this.showQuickJumper() : false}
        			</ul>
        		</div>);
    }

}