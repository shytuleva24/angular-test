import {Component, OnInit} from '@angular/core'
import {PostsService} from '../posts.service'
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    showIds: boolean = false;

    constructor(
        private postsService: PostsService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe((params: Params) => {
            this.showIds = !!params.showIds
        })
    }

    showIdsProgram() {
        this.router.navigate(['/posts'], {
            queryParams: {
                showIds: true
            }
        })
    }
}
